import React, { useState } from 'react'
import { ArrowLeft, FilePlus2, LayoutTemplate } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import { resumeTemplates } from '../utils/data'
import Modal from '../components/Modal'
import CreateResumeForm from '../components/CreateResumeForm'

const templateNames = {
  '01': 'Modern Professional',
  '02': 'Clean Minimal',
  '03': 'Creative Profile',
}

const TemplatesPage = () => {
  const navigate = useNavigate()
  const [selectedTemplateId, setSelectedTemplateId] = useState('01')
  const [openCreateModal, setOpenCreateModal] = useState(false)

  const handleTemplateClick = (templateId) => {
    setSelectedTemplateId(templateId)
    setOpenCreateModal(true)
  }

  return (
    <DashboardLayout>
      <section className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link to="/" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white">
            <ArrowLeft size={17} />
            Back to home
          </Link>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.42em] text-[#40df8a] sm:text-sm">Templates</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Choose your resume style</h1>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-400 sm:text-lg">
            Preview all available resume templates before creating or editing your resume.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#68d987] to-[#f0c84d] px-8 text-base font-black text-[#07170f] transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[230px] sm:text-lg"
          onClick={() => navigate('/dashboard')}
        >
          <FilePlus2 size={22} />
          Create Resume
        </button>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {resumeTemplates.map((template) => (
          <button
            key={template.id}
            type="button"
            className="overflow-hidden rounded-xl border border-white/10 bg-[#0d2016] text-left transition-transform hover:-translate-y-1 hover:border-[#40df8a]/50 focus:outline-none focus:ring-2 focus:ring-[#40df8a] focus:ring-offset-2 focus:ring-offset-[#07170f]"
            onClick={() => handleTemplateClick(template.id)}
          >
            <div className="bg-white p-3">
              <img
                src={template.thumbnailImg}
                alt={`${templateNames[template.id]} resume template`}
                className="h-[430px] w-full rounded-md object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#0a1a12] p-5">
              <div>
                <h2 className="text-lg font-black text-white">{templateNames[template.id]}</h2>
                <p className="mt-1 text-sm font-semibold text-slate-400">Template {template.id}</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#153826] text-[#40df8a]">
                <LayoutTemplate size={21} />
              </div>
            </div>
          </button>
        ))}
      </section>

      <Modal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)} hideHeader>
        <div className="p-6">
          <CreateResumeForm selectedTemplateId={selectedTemplateId} />
        </div>
      </Modal>
    </DashboardLayout>
  )
}

export default TemplatesPage
