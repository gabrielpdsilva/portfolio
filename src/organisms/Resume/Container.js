const Container = () => {
    const workData = [
        {
            title: 'Delfos Intelligent Maintenance',
            subtitle: 'Front End / Mobile Developer Junior',
            date: 'August 2021 - Now',
            description: `I'm currently working maintaning Delfos' Dashboard using ReactJs and its new mobile apps with React Native; I also create user reports using Google Analytics.`,
        },
        {
            title: 'Cernov Apps',
            subtitle: 'Mobile Development Intern',
            date: 'March 2021 - June 2021',
            description: `I worked developing mobile apps using React Native; I also took place maintaning web applications in ReactJS and API with ExpressJS.`,
        },
    ]
    const educationData = [
        {
            title: 'FATEC da Zona Leste',
            subtitle: 'Technologist in System Analysis and Development',
            date: '2019 - 2022',
            description: '',
        },
        {
            title: 'FISK Centro de Ensino',
            subtitle: 'English Idiom Course',
            date: '2018 - 2020',
            description: '',
        },
        {
            title: 'ETEC da Zona Leste',
            subtitle: 'Technician in System Development',
            date: '2018 - 2019',
            description: '',
        },
        {
            title: 'NovaMicroway Escola de Profissões',
            subtitle: 'Vocational Course in Graphic Design',
            date: '2017 - 2017',
            description: '',
        },
        {
            title: 'Colégio Galileu Instituto de Educação e Cultura',
            subtitle: 'High School Level',
            date: '2006 - 2016',
            description: '',
        },
    ]
    const resumeData = [
        {
            title: {
                text: 'Work',
                lineColor: '#42d4f5',
            },
            data: workData,
        },
        {
            title: {
                text: 'Education',
                lineColor: '#42f5b3',
            },
            data: educationData,
        }
    ]

    const skills = {
        title: {
            text: 'Skills',
            lineColor: 'red',
        },
        data: [
            {
                title: 'Git',
                value: 35,
                barColor: '#00ff73',
            },
            {
                title: 'React Native',
                value: 60,
                barColor: '#00fff2',
            },
            {
                title: 'SQL Server',
                value: 40,
                barColor: '#7b00ff',
            },
            {
                title: 'Firebase',
                value: 40,
                barColor: '#fffb00',
            },
            {
                title: 'React',
                value: 60,
                barColor: '#00aaff',
            },
            {
                title: 'Photoshop',
                value: 70,
                barColor: '#9900ff',
            },
            {
                title: 'Java',
                value: 40,
                barColor: '#ff7b00',
            },
        ]
    }

    return {
        resumeData,
        skills,
    }
}

export default Container
