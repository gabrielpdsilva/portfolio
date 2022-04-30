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
            title: '',
            subtitle: '',
            date: '',
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
    
    return {
        resumeData,
    }
}

export default Container
