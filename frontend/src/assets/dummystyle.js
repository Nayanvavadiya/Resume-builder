export const landingPageStyles = {
  // Main container
  container: "min-h-screen bg-[#0a110a] font-sans text-slate-300 overflow-x-hidden",

  // Header styles
  header: "fixed top-0 w-full z-50 bg-[#0a110a]/80 backdrop-blur-xl border-b border-white/5",
  headerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
  logoContainer: "flex items-center gap-3",
  logoIcon: "w-8 h-8 bg-green-400 rounded flex items-center justify-center",
  logoIconInner: "w-5 h-5 text-[#0a110a]",
  logoText: "text-xl sm:text-2xl font-bold text-white tracking-wide uppercase",
  mobileMenuButton: "md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors",
  mobileMenuIcon: "text-white",

  // Auth buttons
  desktopAuthButton: "px-6 py-2 bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold rounded hover:opacity-90 transition-opacity",
  desktopAuthButtonText: "",
  desktopAuthButtonOverlay: "",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold rounded",

  // Mobile menu
  mobileMenu: "md:hidden bg-[#0a110a]/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-white/10 transition-all duration-300 ease-in-out",
  mobileMenuContainer: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome: "text-white font-medium text-center py-2 text-base sm:text-lg",
  mobileDashboardButton: "w-full px-6 py-3 bg-gradient-to-r from-green-400 to-yellow-300 text-black font-bold rounded",

  // Main content
  main: "pt-24",

  // Hero section
  heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",
  heroGrid: "flex flex-col lg:flex-row justify-between gap-12 items-center",
  heroLeft: "space-y-6 flex-1",
  tagline: "",
  heading: "",
  headingText: "",
  headingGradient: "",
  description: "",
  heroBadge: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 text-green-400 font-semibold text-[10px] tracking-widest uppercase",
  heroTitle: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]",
  heroTitleAccent: "text-green-400",
  heroDescription: "text-lg text-slate-400 max-w-lg leading-relaxed",

  ctaButtons: "flex flex-col sm:flex-row gap-4 pt-2",
  primaryButton: "flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold rounded hover:opacity-90 transition-opacity",
  primaryButtonOverlay: "",
  primaryButtonContent: "",
  primaryButtonIcon: "",
  secondaryButton: "px-8 py-3 border border-white/20 text-white font-semibold rounded hover:bg-white/5 transition-colors",

  statsContainer: "flex flex-wrap items-center gap-8 pt-8 mt-8",
  statItem: "text-left",
  statNumber: "",
  statValue: "text-3xl font-bold text-white",
  statLabel: "text-xs text-slate-500 font-semibold tracking-wider uppercase mt-1",

  heroIllustration: "",
  heroIllustrationBg: "",
  heroIllustrationContainer: "",
  svgContainer: "",
  svgRect: "",
  svgCircle: "",
  svgRectPrimary: "",
  svgRectSecondary: "",
  svgRectLight: "",
  svgRectSkill: "",
  svgAnimatedCircle: "",
  svgAnimatedRect: "",
  svgAnimatedPolygon: "",

  // Hero Preview Card
  heroPreviewCard: "relative w-full max-w-lg bg-[#111811] border border-white/5 rounded-2xl p-8 shadow-2xl flex-1",
  previewTopBar: "flex items-center gap-2 mb-8",
  previewDot: "w-16 h-2 rounded-full bg-slate-700/50",
  previewHeader: "flex items-center gap-4 mb-8",
  previewAvatar: "w-12 h-12 rounded bg-[#dcfce7] text-[#166534] flex items-center justify-center text-lg font-bold",
  previewName: "h-3 w-32 rounded-full bg-slate-600 mb-2",
  previewRole: "h-2 w-20 rounded-full bg-slate-700",
  previewContent: "space-y-4 mb-8",
  previewLine: "h-2 rounded-full bg-slate-700/50",
  previewLineLong: "w-full",
  previewLineMedium: "w-4/5",
  previewLineShort: "w-1/2",
  skillChips: "flex flex-wrap gap-2 mb-8",
  skillChip: "px-3 py-1 rounded-full border border-white/10 text-slate-400 text-xs font-medium",
  previewFooter: "inline-flex items-center gap-2 rounded-lg bg-white/5 text-slate-300 px-4 py-2 text-xs font-medium border border-white/10",

  // Features section
  featuresSection: "py-24 bg-[#0a110a]",
  featuresContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  featuresHeader: "mb-16",
  sectionIntro: "text-4xl sm:text-5xl font-bold text-white mb-2",
  featuresTitle: "text-4xl sm:text-5xl font-bold text-green-400 mb-6",
  featuresDescription: "text-slate-400",
  featuresGrid: "grid grid-cols-1 md:grid-cols-3 gap-6",

  // Feature cards
  featureCard: "relative group bg-[#0e1610] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors",
  featureCardGlow: "hidden",
  featureCardContent: "relative z-10",
  featureIconContainer: "w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-300 rounded flex items-center justify-center text-black mb-6",
  featureIconWrapper: "w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-300 rounded flex items-center justify-center text-black mb-6",
  featureIcon: "w-6 h-6",
  featureTitle: "text-xl font-bold text-white mb-3",
  featureDescription: "text-sm text-slate-400 leading-relaxed",
  featureCardViolet: "",
  featureCardFuchsia: "",
  featureCardOrange: "",
  featureIconViolet: "",
  featureIconFuchsia: "",
  featureIconOrange: "",

  // Testimonial Section
  testimonialSection: "py-24",
  testimonialCard: "max-w-4xl mx-auto text-left px-4",
  testimonialRating: "flex items-center gap-4 mb-8",
  testimonialRatingBadge: "flex items-center gap-1 text-yellow-400 text-xl",
  testimonialRatingText: "text-sm text-slate-400",
  testimonialQuote: "text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-white",

  // CTA Section
  ctaSection: "py-24 px-4",
  ctaContainer: "max-w-4xl mx-auto relative",
  ctaCard: "relative bg-gradient-to-b from-[#111f15] to-[#0a110a] border border-white/10 rounded-2xl p-12 text-center overflow-hidden",
  ctaCardBg: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-green-500/20 blur-[100px]",
  ctaContent: "relative z-10 flex flex-col items-center gap-8",
  ctaTitle: "text-4xl sm:text-5xl font-bold text-white",
  ctaTitleGradient: "",
  ctaDescription: "text-slate-400",
  ctaButton: "px-8 py-4 bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold rounded hover:opacity-90 transition-opacity",
  ctaButtonOverlay: "",
  ctaButtonText: "",

  // Footer
  footer: "py-8",
  footerContainer: "max-w-6xl mx-auto px-4 text-center",
  footerText: "text-sm text-slate-500",
  footerHeart: "",
  footerLink: "",

  navLinks: "hidden md:flex items-center gap-8",
  navLink: "text-sm font-medium text-slate-400 hover:text-white transition-colors",
  headerActions: "hidden md:flex items-center",
};

export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-600",

  // Create Button
  createButton: "group relative px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-200",
  createButtonOverlay: "absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-violet-100 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-gray-900 mb-2",
  emptyText: "text-gray-600 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard: "flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-dashed border-violet-300 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:border-violet-500 h-full",
  newResumeIcon: "w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center mb-4",
  newResumeTitle: "text-xl font-bold text-gray-900 mb-2 text-center",
  newResumeText: "text-gray-600 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-gray-900",
  modalCloseButton: "text-gray-500 hover:text-gray-700",

  // Delete Confirmation
  deleteIconWrapper: "bg-red-100 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-gray-900 mb-2",
  deleteText: "text-gray-600 mb-4",
};


export const cardStyles = {
  // ProfileInfoCard styles
  profileCard: "inline-flex h-[54px] min-w-[96px] items-center gap-3 rounded-md border border-white/10 bg-[#0b1f15] px-4 text-left transition-colors hover:border-[#2d875e] hover:bg-[#10281b]",
  profileInitialsContainer: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#74dc83] to-[#f0c84d] shadow-sm",
  profileInitialsText: "text-sm font-black text-[#07170f]",
  profileName: "max-w-[90px] truncate text-base font-black text-slate-200",
  logoutButton: "hidden",

  // ResumeSummaryCard styles
  resumeCard: "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-[#0d2016] border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-[#40df8a]/50 hover:shadow-2xl hover:shadow-green-950/30",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-violet-100 via-transparent to-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden",
  emptyPreview: "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl",
  emptyPreviewIcon: "w-16 h-16 bg-gradient-to-br from-[#70d987] to-[#f0c84d] rounded-xl flex items-center justify-center mb-4 shadow-md",
  emptyPreviewText: "text-[#07170f] text-sm font-bold",
  emptyPreviewSubtext: "text-slate-700 text-xs mt-1",
  infoArea: "bg-[#0a1a12] border-t border-white/10 p-4 sm:p-6",
  title: "text-sm sm:text-base font-bold text-white truncate mb-2 group-hover:text-[#40df8a] transition-colors",
  dateInfo: "flex flex-wrap items-center gap-2 text-xs text-slate-400",

  // Action buttons
  actionOverlay: "absolute inset-4 sm:inset-6 bg-gradient-to-t from-[#07170f]/85 via-[#07170f]/30 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl",
  actionButtonsContainer: "flex gap-3",
  editButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#68d987] to-[#f0c84d] rounded-xl shadow-md hover:scale-110 transition-all duration-300",
  deleteButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-600 rounded-xl shadow-md hover:scale-110 transition-all duration-300",
  buttonIcon: "text-[#07170f] group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-2 bg-gray-200 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs font-medium text-slate-400",
  percentageText: "text-xs font-bold text-slate-200",

  // Completion indicator
  completionIndicator: "absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-[#07170f]/90 border border-white/10 rounded-full shadow-sm",
  completionDot: "w-3 h-3 rounded-full flex items-center justify-center",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-xs font-bold text-slate-100",

  // Completion color classes
  completionHigh: "from-emerald-500 to-green-600",
  completionMedium: "from-yellow-500 to-orange-500",
  completionLow: "from-red-500 to-pink-600",

  // TemplateCard styles
  templateCard: "relative rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-gray-200",
  templateCardSelected: "ring-2 ring-indigo-500 scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-gray-300",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle: "w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-gray-800",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-gray-600 mt-1"
};

export const authStyles = {
  container: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-violet-50 rounded-3xl border border-violet-100 shadow-2xl",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-slate-900 mb-2",
  subtitle: "text-slate-600 font-medium",
  form: "space-y-6",
  errorMessage: "text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-xl",
  submitButton: "w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-violet-200 transition-all text-lg",
  switchText: "text-center text-sm text-slate-600 font-medium",
  switchButton: "font-black text-violet-600 hover:text-fuchsia-600 transition-colors",
  signupContainer: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-rose-50 rounded-3xl border border-rose-100 shadow-2xl overflow-hidden",
  signupTitle: "text-2xl font-black text-slate-900 mb-2",
  signupSubtitle: "text-slate-600 font-medium",
  signupForm: "space-y-4",
  signupSubmit: "w-full py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all text-lg",
  signupSwitchButton: "font-black text-rose-600 hover:text-pink-600 transition-colors"
};

export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .animate-flow {
    animation: flow 4s infinite linear;
  }
  
  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`
// Common Styles
export const commonStyles = {
  trashButton: "absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all",
  addButtonBase: "flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg",
};

// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-violet-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  sectionHeading: "text-lg font-bold text-slate-800 mb-6 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full",
  dotOrange: "w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full",
  languageItem: "relative bg-white border border-violet-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
  addButtonInterest: "bg-gradient-to-r from-orange-500 to-red-500",
};

// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-blue-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
};

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gradient-to-br from-white to-indigo-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-indigo-500 to-purple-500",
};

// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-rose-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  textarea: "w-full p-4 bg-white text-black  border border-rose-200 rounded-xl focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all outline-none resize-none",
};

// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gradient-to-br from-white to-cyan-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-cyan-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-cyan-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-cyan-500 to-blue-500",
};

// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-amber-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-amber-500 to-orange-500",
};

// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gradient-to-br from-white to-green-50",
  heading: "text-2xl font-black text-slate-900 mb-8",
  item: "relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-green-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-green-500 to-emerald-500",
};

export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-violet-50 border border-violet-100 rounded-2xl py-4 px-6 mb-6 shadow-sm",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm",
  previewContainer: "bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto"
};

export const buttonStyles = {
  theme: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-violet-100 text-violet-700 font-bold rounded-xl hover:bg-violet-200 transition-all",
  delete: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 transition-all",
  download: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all",
  back: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm",
  save: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-700 font-bold rounded-xl hover:bg-blue-200 transition-all text-sm",
  next: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm",
  modalAction: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm"
};

export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700",
  modalBadge: "inline-flex items-center gap-2 bg-violet-100 px-3 py-1 rounded-full text-sm font-medium text-violet-700",
  error: "flex items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl mb-4"
};

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
};

export const inputStyles = {
  wrapper: "mb-6 group",
  label: "block text-sm font-bold text-gray-800 mb-3 group-focus-within:text-violet-600 transition-colors",
  inputContainer: focused => `relative flex items-center bg-gray-50 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${focused
    ? 'border-violet-500 ring-4 ring-violet-500/20 shadow-lg shadow-violet-500/10'
    : 'border-gray-300 hover:border-gray-400'}`,
  inputField: "w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 font-medium",
  toggleButton: "text-gray-500 hover:text-violet-600 transition-colors p-1 rounded-lg hover:bg-gray-100",
};

export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: hovered => `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-full cursor-pointer transition-all duration-300 ${hovered ? 'hover:border-violet-500 hover:bg-violet-50' : ''}`,
  cameraButton: "absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-full transition-all shadow-lg hover:scale-110",
  previewWrapper: "relative group",
  previewImageContainer: hovered => `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg transition-all duration-300 ${hovered ? 'group-hover:border-violet-400' : ''}`,
  previewImage: "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay: "absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) => `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all`,
};

export const titleInputStyles = {
  container: "flex items-center gap-3",
  titleText: "text-lg sm:text-xl font-bold text-gray-800",
  editButton: "p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all group",
  editIcon: "w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors",
  inputField: focused => `text-lg sm:text-xl font-bold bg-transparent outline-none text-gray-800 border-b-2 pb-2 transition-all duration-300 ${focused ? 'border-violet-500' : 'border-gray-300'}`,
  confirmButton: "p-2 rounded-xl bg-violet-500 hover:bg-violet-600 text-white transition-all",
};

export const modalStyles = {
  overlay: "fixed inset-0 flex items-center justify-center w-full h-full bg-black/60 backdrop-blur-sm z-50",
  container: "relative flex flex-col bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-violet-100 max-w-[95vw] max-h-[95vh]",
  header: "flex items-center justify-between p-6 border-b border-violet-100 bg-gradient-to-r from-white to-violet-50",
  title: "text-xl font-black text-slate-900",
  actionButton: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg mr-12",
  closeButton: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all shadow-lg hover:scale-110 z-10",
  body: "flex-1 overflow-y-auto"
};

export const infoStyles = {
  // Progress
  progressWrapper: "w-20 h-2 rounded-full bg-gray-200",
  progressBar: color => `h-full rounded-full transition-all`,

  // ActionLink
  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-gray-600 hover:text-emerald-600 transition-colors",

  // CertificationInfo
  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-gray-600 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-700",

  // EducationInfo
  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-900",
  eduInstitution: "text-sm text-gray-700 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-900",

  // Links
  linkRow: "flex items-center space-x-1 hover:text-blue-600",

  // ProjectInfo
  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? 'text-sm' : 'text-base'} font-semibold text-gray-900`,
  projectDesc: "text-sm text-gray-600 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  // WorkExperience
  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-900",
  workRole: "text-base font-medium text-gray-700",
  workDuration: color => `text-sm font-bold italic`,
  workDesc: "text-sm text-gray-600 font-medium leading-relaxed"
};

