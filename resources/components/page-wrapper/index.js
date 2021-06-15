export default function PageWrapper({children, locale}) {
  return (
    <div dir={['ar'].indexOf(locale) != -1 ? 'rtl' : 'ltr'}>
      {children}
    </div>
  )
}