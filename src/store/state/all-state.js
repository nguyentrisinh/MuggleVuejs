// Const for companies list
// export const companies = [ ]
export const companies = [
  {
    id: 1,
    district: 'Quận Tân Bình',
    name: 'Beesight Soft',
    slug: 'Together make perfect',
    job_count: 3,
    rating: 4,
    website: 'http://www.beesightsoft.com.vn',
    overview: 'Founded since 2011 by young and passionate technologists. Beesight Soft has started by innovative passion ' +
    '"together makes perfect". Since the, Beesight Soft has been initially successful in providing high quality outsourcing services, creating reputation for many domestic and foreign enterprises. ' +
    'Beesight Soft will grow with continuous efforts to explore the needs and build the best solutions for your business within reasonable budget.'
  },
  {
    id: 3,
    district: 'Quận Tân Bình',
    name: 'NUS Technology',
    slug: 'Now You\'re Satisfied',
    job_count: 0,
    rating: 3.7,
    website: 'https://www.nustechnology.com/',
    overview: 'NUS Technology offers leading edge web and mobile software development services, as well as project management and product management. ' +
    'We proudly serve a diverse group of clients across the globe, from small businesses to large corporations.'
  },
  {
    id: 4,
    district: 'Quận Bình Thạnh',
    name: 'Youth Dev',
    slug: 'We are YouthDev',
    job_count: 1,
    rating: 3.7,
    website: 'https://youthdev.net/en/',
    overview: 'YouthDev is an IT solution company founded in 2014 by some experienced engineers. ' +
    'YouthDev which mean young, strong, skillful and full of zeal. YouthDev also means "Good services or no service at all".'
  },
  {
    id: 2,
    district: 'Quận 12',
    name: 'Terralogic',
    slug: 'Expect Excellence',
    job_count: 1,
    rating: 4.2,
    website: 'http://www.terralogic.com/',
    overview: 'Anything we do we are fast and perfect, Agility is in our DNA. We get our inspiration and motivation from our plethora of product thinking management teams. ' +
    'Our mid-level management not only takes care of the assigned work but goes one step beyond in power-consulting our customers at the right time and on the right aspect. Every employee of Terralogic zeal’s to find solutions be it internal or for our partners. Our employees are trained to handle pressure and aggressive deadlines. ' +
    'This approach towards customer sensitivity and delivery have given us abundant opportunity to add value in multiple domains and technologies. Partner with us, let’s achieve success together.'
  }
]

// Const for jobs list
// export const jobs = []
export const jobs = [
  {
    id: 1,
    name: 'Android Developer - Urgent',
    district: 'Quan Tan Binh',
    description: 'Do Android project',
    skills: [
      {
        id: 1,
        name: 'Java'
      },
      {
        id: 2,
        name: 'Android Studio'
      }
    ]
  },
  {
    id: 2,
    name: 'Backend Python Developer',
    district: 'Quan Tan Binh',
    description: 'Do Python backend project, lam cai nay chut cho no dai dai ra nha moi nguoi',
    skills: [
      {
        id: 1,
        name: 'Python'
      },
      {
        id: 2,
        name: 'REStful'
      },
      {
        id: 3,
        name: 'Django'
      }
    ]
  }
]

export const company = {
  id: 1,
  address: '320/12 Trường Chinh street, Tân Bình district',
  district: 'Quận Tân Bình',
  name: 'Beesight Soft',
  slug: 'Together make perfect',
  job_count: 3,
  rating: 4,
  website: 'http://www.beesightsoft.com',
  email: 'nguyentrisinh0810@gmail.com',
  google_map: 'https://www.google.co.in/maps/place/Beesightsoft/@10.79938,106.640949,17z/data=!3m1!4b1!4m5!3m4!1s0x3175294e5cb39f19:0x4bd5f55bf006d338!8m2!3d10.79938!4d106.643143',
  jobs: [
    {
      description: 'Lam cac project lien quan den Android',
      id: 7,
      name: 'Android Developer - Urgent'
    },
    {
      description: 'Lam cac project lien quan den Ruby',
      id: 8,
      name: 'Ruby on Rails Developer - Urgent'
    },
    {
      description: 'lam vi tri backend ve Python voi framework Django hay Flask',
      id: 3,
      name: 'Backend Python developer (Intern/Fresher)'
    }
  ],
  overview: 'Founded since 2011 by young and passionate technologists. Beesight Soft has started by innovative passion "together makes perfect". ' +
  'Since the, Beesight Soft has been initially successful in providing high quality outsourcing services, creating reputation for many domestic and foreign enterprises. ' +
  'Beesight Soft will grow with continuous efforts to explore the needs and build the best solutions for your business within reasonable budget.',
  size: 55,
  type_id: 2
}

export const reviews = [
  {
    author_id: 4,
    created_at: '2017-08-01T10:47:00+00:00',
    id: 4,
    rating: 5,
    title: 'agrag',
    updated_at: '2017-08-01T10:51:41+00:00',
    what_user_dislike: 'hweghfq',
    what_user_like: 'rwhwf32'
  },
  {
    author_id: 1,
    created_at: '2017-08-14T10:50:00+00:00',
    id: 6,
    rating: 4.6,
    title: 'vwv',
    updated_at: '2017-08-01T10:52:06.905504+00:00',
    what_user_dislike: 'vqvcvwerbv',
    what_user_like: 'vasvwgeg2'
  },
  {
    author_id: 1,
    created_at: '2017-08-01T10:55:29.455706+00:00',
    id: 8,
    rating: 3.8,
    title: 'geqwgq',
    updated_at: '2017-08-01T10:55:29.455706+00:00',
    what_user_dislike: 'cqe',
    what_user_like: 'gqg'
  },
  {
    author_id: 2,
    created_at: '2017-08-01T10:51:00+00:00',
    id: 7,
    rating: 5,
    title: 'Đây thực sự là 1 công ty tốt',
    updated_at: '2017-08-01T10:51:28+00:00',
    what_user_dislike: 'Lương cần cao hơn để cuộc sống nhân viên tốt hơn\r\nCần thêm đồ ăn vặt hơn nữa' +
    '\r\nMở thêm các lớp training để nâng cao khả năng nhân viên',
    what_user_like: 'Tôi thích cái này\r\nTôi thích cái kia\r\nThức ăn ở đây rất nhiều\r\nVà các anh hướng dẫn rất nhiệt tình, thân thiện'
  }
]

export const job = {
  benefits: [
    {
      benefit: {
        id: 4,
        name: 'Health Insurance'
      },
      benefit_id: 4,
      created_at: '2017-08-02T14:23:55.615025+00:00',
      description: 'Health Insurance each years up to 500.000.000VND',
      id: 6,
      job_id: 3,
      updated_at: '2017-08-02T14:23:55.615025+00:00'
    },
    {
      benefit: {
        id: 4,
        name: 'Salary'
      },
      benefit_id: 4,
      created_at: '2017-08-02T14:23:55.615025+00:00',
      description: 'Competitive salary',
      id: 6,
      job_id: 3,
      updated_at: '2017-08-02T14:23:55.615025+00:00'
    }
  ],
  created_at: '2017-08-01T16:45:00+00:00',
  name: '(Fr.) Back-end Engineer (Ruby/Python)',
  full_time: true,
  skills: [
    {
      id: 1,
      description: 'Have some knowledge in Ruby',
      name: 'Ruby',
      skill_id: 2
    },
    {
      id: 2,
      description: 'Familiar with RubyMine IDE',
      name: 'RubyMine',
      skill_id: 2
    },
    {
      id: 3,
      description: 'Can read document in Englishs',
      name: 'English',
      skill_id: 4
    }
  ],
  updated_at: '2017-08-01T16:45:26+00:00',
  description: 'Lam cac project lien quan den Ruby\r\nFix bug cac du an cu cua cong ty\r\n' +
  'Tiep xuc voi khach hang nuoc ngoai va trong phai doc tai lieu bang tieng Anh\r\nChiu kho research',
  company: {
    id: 1,
    address: '320/12 Trường Chinh street, Tân Bình district',
    google_map: 'https://www.google.co.in/maps/place/Beesightsoft/@10.79938,106.640949,17z/data=!3m1!4b1!4m5!3m4!1s0x3175294e5cb39f19:0x4bd5f55bf006d338!8m2!3d10.79938!4d106.643143',
    name: 'Beesight Soft',
    overview: 'Founded since 2011 by young and passionate technologists. Beesight Soft has started by innovative passion "together makes perfect". ' +
    'Since the, Beesight Soft has been initially successful in providing high quality outsourcing services, creating reputation for many domestic and foreign enterprises. ' +
    'Beesight Soft will grow with continuous efforts to explore the needs and build the best solutions for your business within reasonable budget.',
    job_count: 3,
    rating: 4,
    size: 55,
    type_id: 2
  }
}
