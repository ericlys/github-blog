const formatDate = new Intl.RelativeTimeFormat('pt-BR', {
  numeric: 'auto',
  style: 'long',
})

const nowDay = new Date().getDate()

export const relativeDate = (date: Date) => {
  return formatDate.format(date.getDate() - nowDay, 'day')
}
