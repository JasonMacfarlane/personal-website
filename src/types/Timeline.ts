type TimelineLink = {
  href: string
  name: string
  icon?: string
}

type TimelineSection = {
  place: string
  title: string
  date: string
  location?: string
  links?: TimelineLink[]
  note?: string,
  content: string
}

export type Timeline = Array<TimelineSection>
