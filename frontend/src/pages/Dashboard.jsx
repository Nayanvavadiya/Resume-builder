import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { dashboardStyles as styles } from '../assets/dummystyle'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Clock3, Download, FilePlus2, FileText, Plus, Trash2 } from 'lucide-react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'
import { ResumeSummaryCard } from '../components/Cards'
import Modal from '../components/Modal'
import CreateResumeForm from '../components/CreateResumeForm'

import toast from 'react-hot-toast'
import moment from 'moment'

const Dashboard = () => {

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [openCreateModal, setOpencreateModal] = useState(false)
    const [allResumes, setAllResumes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [resumeToDelete, setResumeToDelete] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const displayName = user?.name?.split(' ')[0] || 'Alex';

    const calculateCompletion = useCallback((resume) => {
        let completedFields = 0;
        let totalFields = 0;

        totalFields += 3;
        if (resume.profileInfo?.fullName) completedFields++;
        if (resume.profileInfo?.designation) completedFields++;
        if (resume.profileInfo?.summary) completedFields++;

        totalFields += 2;
        if (resume.contactInfo?.email) completedFields++;
        if (resume.contactInfo?.phone) completedFields++;

        resume.workExperience?.forEach(exp => {
            totalFields += 5;
            if (exp.company) completedFields++;
            if (exp.role) completedFields++;
            if (exp.startDate) completedFields++;
            if (exp.endDate) completedFields++;
            if (exp.description) completedFields++;
        });

        resume.education?.forEach(edu => {
            totalFields += 4;
            if (edu.degree) completedFields++;
            if (edu.institution) completedFields++;
            if (edu.startDate) completedFields++;
            if (edu.endDate) completedFields++;
        });

        resume.skills?.forEach(skill => {
            totalFields += 2;
            if (skill.name) completedFields++;
            if (skill.progress > 0) completedFields++;
        });

        resume.projects?.forEach(project => {
            totalFields += 4;
            if (project.title) completedFields++;
            if (project.description) completedFields++;
            if (project.github) completedFields++;
            if (project.liveDemo) completedFields++;
        });

        resume.certifications?.forEach(cert => {
            totalFields += 3;
            if (cert.title) completedFields++;
            if (cert.issuer) completedFields++;
            if (cert.year) completedFields++;
        });

        resume.languages?.forEach(lang => {
            totalFields += 2;
            if (lang.name) completedFields++;
            if (lang.progress > 0) completedFields++;
        });

        totalFields += (resume.interests?.length || 0);
        completedFields += (resume.interests?.filter(i => i?.trim() !== '')?.length || 0);

        return totalFields ? Math.round((completedFields / totalFields) * 100) : 0;
    }, []);

    const fetchAllResumes = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL)
            const resumeWithCompletion = response.data.map(resume => ({
                ...resume,
                completion: calculateCompletion(resume)
            }))

            setAllResumes(resumeWithCompletion)
        }
        catch (error) {
            console.error('Error fetching resumes:', error)
        }
        finally {
            setLoading(false)
        }
    }, [calculateCompletion])

    useEffect(() => {
        fetchAllResumes();
    }, [fetchAllResumes]);

    const lastEdited = useMemo(() => {
        if (!allResumes.length) return '-'

        const latest = allResumes
            .map(resume => resume.updatedAt || resume.createdAt)
            .filter(Boolean)
            .sort((a, b) => new Date(b) - new Date(a))[0]

        return latest ? moment(latest).format('MMM D, YYYY') : '-'
    }, [allResumes])

    const handleDeleteresume = async () => {
        if (!resumeToDelete) return;

        try {
            await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeToDelete))
            toast.success('Resume deleted successfully')
            fetchAllResumes()
        }
        catch (error) {
            console.error('Error deleting resume:', error)
            toast.error('Failed to delete resume')
        }
        finally {
            setResumeToDelete(null)
            setShowDeleteConfirm(false)
        }
    }

    const handledDeleteClick = (id) => {
        setResumeToDelete(id);
        setShowDeleteConfirm(true);
    }

    const statCards = [
        { icon: <FileText size={27} />, value: allResumes.length, label: 'Resumes' },
        { icon: <Download size={27} />, value: 0, label: 'Downloads' },
        { icon: <Clock3 size={27} />, value: lastEdited, label: 'Last Edited' },
    ]

    return (
        <DashboardLayout>
            <section className='mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
                <div>
                    <p className='mb-3 text-xs font-black uppercase tracking-[0.42em] text-[#40df8a] sm:text-sm'>Dashboard</p>
                    <h1 className='text-4xl font-black tracking-tight text-white sm:text-5xl'>Welcome back, {displayName}</h1>
                </div>

                <button
                    type='button'
                    className='inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#68d987] to-[#f0c84d] px-8 text-base font-black text-[#07170f] transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[250px] sm:text-lg'
                    onClick={() => setOpencreateModal(true)}
                >
                    <FilePlus2 size={22} />
                    New Resume
                </button>
            </section>

            <section className='mb-8 grid gap-5 md:grid-cols-3'>
                {statCards.map(({ icon, value, label }) => (
                    <div key={label} className='flex min-h-[118px] items-center gap-5 rounded-xl border border-white/10 bg-white/[0.035] px-7 py-6'>
                        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#153826] text-[#40df8a]'>
                            {icon}
                        </div>
                        <div>
                            <div className='text-3xl font-black leading-none text-white'>{value}</div>
                            <div className='mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400'>{label}</div>
                        </div>
                    </div>
                ))}
            </section>

            {loading && (
                <div className='flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02]'>
                    <div className='h-12 w-12 animate-spin rounded-full border-2 border-[#40df8a] border-t-transparent'></div>
                </div>
            )}

            {!loading && allResumes.length === 0 && (
                <section className='flex min-h-[540px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#07170f]/70 px-6 py-14 text-center shadow-[inset_0_0_80px_rgba(64,223,138,0.03)] sm:min-h-[650px]'>
                    <div className='mb-9 flex h-[106px] w-[106px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#70d987] to-[#f0c84d] text-[#07170f] shadow-[0_0_60px_rgba(64,223,138,0.14)]'>
                        <FilePlus2 size={48} strokeWidth={2.5} />
                    </div>

                    <h2 className='mb-6 text-3xl font-black text-white'>No resumes yet</h2>
                    <p className='mb-10 max-w-[590px] text-lg font-medium leading-relaxed text-slate-400'>
                        Create your first resume and start landing interviews. It only takes a few minutes.
                    </p>

                    <button
                        type='button'
                        className='inline-flex h-14 w-full max-w-[385px] items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#68d987] to-[#f0c84d] px-6 text-base font-black text-[#07170f] transition-transform hover:-translate-y-0.5 sm:text-lg'
                        onClick={() => setOpencreateModal(true)}
                    >
                        <FilePlus2 size={22} />
                        Create Your First Resume
                    </button>

                    <Link to='/' className='mt-9 text-lg font-semibold text-slate-500 transition-colors hover:text-slate-300'>
                        &larr; Back to home
                    </Link>
                </section>
            )}

            {!loading && allResumes.length > 0 && (
                <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <button
                        type='button'
                        className='flex min-h-[380px] flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.025] p-6 text-center transition-colors hover:border-[#40df8a]/60 hover:bg-white/[0.04]'
                        onClick={() => setOpencreateModal(true)}
                    >
                        <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-[#70d987] to-[#f0c84d] text-[#07170f]'>
                            <Plus size={36} />
                        </div>
                        <h3 className='text-xl font-black text-white'>Create New Resume</h3>
                        <p className='mt-2 text-sm font-medium text-slate-400'>Start building your career</p>
                    </button>

                    {allResumes.map((resume) => (
                        <ResumeSummaryCard key={resume._id} imgUrl={resume.thumbnailLink}
                            title={resume.title} createdAt={resume.createdAt} updatedAt={resume.updatedAt}
                            onSelect={() => navigate(`/resume/${resume._id}`)}
                            onDelete={() => handledDeleteClick(resume._id)}
                            completion={resume.completion || 0}
                            isPremium={resume.isPremium}
                            isNew={moment().diff(moment(resume.createdAt), 'days') < 7}
                        />
                    ))}
                </section>
            )}

            <Modal isOpen={openCreateModal} onClose={() => setOpencreateModal(false)} hideHeader>
                <div className='p-6'>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Create New Resume</h3>

                        <button onClick={() => setOpencreateModal(false)} className={styles.modalCloseButton}>
                            X
                        </button>
                    </div>
                    <CreateResumeForm onSuccess={() => {
                        setOpencreateModal(false);
                        fetchAllResumes();
                    }} />
                </div>
            </Modal>

            <Modal isOpen={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} title='Confirm Deletion'
                showActionBtn actionBtnText='Delete' actionBtnClassName='bg-red-600 hover:bg-red-700'
                onActionClick={handleDeleteresume}>

                <div className='p-4'>
                    <div className='flex flex-col items-center text-center'>
                        <div className={styles.deleteIconWrapper}>
                            <Trash2 className='text-orange-600' size={24} />
                        </div>

                        <h3 className={styles.deleteTitle}>Delete resume?</h3>
                        <p className={styles.deleteText}>
                            Are you sure you want to delete this resume? This action cannot be undone.
                        </p>
                    </div>
                </div>
            </Modal>
        </DashboardLayout>
    )
}

export default Dashboard


