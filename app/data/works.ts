export type WorkType = {
  id: number
  title: { en: string; ja: string }
  images: string[]
  overview: { en: string; ja: string }
  tech: string[]
  website: string | null
  github: string | null
}

export const works: WorkType[] = [
  {
    id: 1,
    title: { en: 'Learning Child App', ja: '小学生学習アプリ' },
    images: [
      'work1-1.webp',
      'work1-2.webp',
      'work1-3.webp',
      'work1-4.webp',
      'work1-5.webp'
    ],
    overview: {
      en: 'Learning subscription service for elementary school children. This service encourage children to improve their thinking skills. \nI joined as a front end-lead engineer, leading 6 engineers. I built core service features and created wireframe at the first phase with reviewing all developers code considering maintainability and scalability. This project took 1 year to release.',
      ja: '小学生用のサブスク型学習サービスです。子どもたちの考える力を鍛える内容を提供しています。フロントエンドリーダーとして参画し、0→1開発を担当しました。6名のエンジニアをリードし、保守制やスケーラビリティーを意識しながら、全員のレビューを行いました。初期フーズでは要件定義を行いワイヤフレームも作成しました。リリースまでは1年の大きめのプロジェクトです。'
    },
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'ChakraUI',
      'Redux Toolkit',
      'RTK Query',
      'AWS Cognito',
      'Stripe'
    ],
    website: 'https://kangaemax.com/login',
    github: null
  },
  {
    id: 2,
    title: { en: 'Moving Matching App', ja: '引越しマッチングアプリ' },
    images: ['work2-1.webp', 'work2-2.webp', 'work2-3.webp'],
    overview: {
      en: 'Matching web service for people who live alone and moving companies with providing the low fixed cost. There are many form for users to find potential companies to match. \nI joined as a front end developer and this was first project I joined at a previous company. Component architecture of Atomic design was used for this project. I was also responsibility of the top page. In the end, I handled all features of front side alone communicating with back end engineers.',
      ja: '単身者向けの引越しマッチングアプリで、基本的には固定且つ安価でユーザーはサービスを利用できます。見積もりの段階でユーザーの場所や内容を入力すると、金額と日程が表示されます。\n初めてフロントエンドエンジニアとして参画したプロジェクトです。アトミックデザインを採用しており、最終的にはフロントエンド側は私一人で開発を行なっておりました。'
    },
    tech: ['TypeScript', 'React', 'Sass', 'Axious', 'React Hook Form'],
    website: 'https://www.t-hikkoshi-navi.jp/',
    github: null
  },
  {
    id: 3,
    title: { en: 'Portfolio site', ja: 'ポートフォリオサイト' },
    images: ['work3-1.webp', 'work3-2.webp'],
    overview: {
      en: 'This static website has feature of dark theme mode and multi language mode. I designed with Figma and made it with Next.js.',
      ja: 'こちらの静的サイトは、ダークモード機能と言語切り替えを追加しております。\nデザインはFigma、サイトはNext.jsで作りました。'
    },
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Figma'],
    website: 'https://www.kanataguchi.com/',
    github: 'https://github.com/Kana-TAGUCHI/portfolio-site-23'
  },
  {
    id: 4,
    title: { en: 'IT Recruitment Service', ja: 'IT人材採用サービス' },
    images: ['work4-1.webp', 'work4-2.webp', 'work4-3.webp', 'work4-4.webp'],
    overview: {
      en: 'IT recruitment service which allows recruiters to employ engineers or designers at lower cost and prioritizing their culture matching. \nI joined as a freelance full-stack engineer designing LP site with Figma, making API, and implementing front side. For management global state, we used Jotai and we used React Query for server state. This web application will be released in this winter.',
      ja: 'Fit感を重要視した新しい形のIT特化型人材採用サービスです。\nフリーランスとして参画し、LPのデザインからバックエンド、フロントエンドまで担当しました。'
    },
    tech: [
      'Nest.js',
      'TypeScript',
      'Next.js',
      'ChakraUI',
      'Astro',
      'Jotai',
      'React Query',
      'Figma'
    ],
    website: null,
    github: null
  },
  {
    id: 5,
    title: { en: 'Budget App', ja: '家計簿アプリ' },
    images: ['work5-1.webp', 'work5-2.webp', 'work5-3.webp'],
    overview: {
      en: 'This is the first application using React.js I made in 2021. I made this to calculate monthly fee and add the feature of authorization using Firebase. You can login using this test user. \nEmail address: test@gmail.com, password: test1133',
      ja: '2021年にReactを使用して初めて作ったアプリです。月毎の出費を確認することができ、またサインアップ/ログイン機能もついています。こちらのテストユーザーを使用してご確認いただけます。\nEmail address: test@gmail.com, password: test1133'
    },
    tech: ['React.js', 'Firebase'],
    website: 'https://my-budget-app-fc01e.web.app/',
    github: 'https://github.com/Kana-TAGUCHI/My-budget-app'
  }
]
