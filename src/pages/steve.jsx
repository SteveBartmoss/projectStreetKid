import './steve.css'

export function Steve() {

    return (
        <>
            <div className="div-main">
                <div className='div-aside'>
                    <div>
                        <div className='div-img-profile'>
                            <img className='img-profile' src="/Assets/steveA.png" />
                        </div>

                        <div>
                            <h1>Steve Bartmoss</h1>
                            <p>Desarrollador FullStack</p>
                        </div>

                        <div>
                            <h1>Bio</h1>
                        </div>
                    </div>

                </div>
                <div className='div-main-content'>
                    <div className='grid-img'>
                        <div>
                            <img className='img-grid' src='https://media.giphy.com/media/7SN7VRxzzcby9nyKJV/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/x36gbskGuz7VEC2loJ/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/etUASOMm3hvgKLcBWH/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/oQJHn1H0Z6QIo1iwAs/giphy.gif' />
                        </div>
                        <div>
                            <img className='img-grid' src='https://media.giphy.com/media/YeHfWtSXQWn104pMAZ/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/bmcwLJfsu9kZL2ew2L/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/Gvm8o9CRjPhwlfchui/giphy.gif' />
                            <img className='img-grid' src='https://media.giphy.com/media/CtVnM96GLP6KJcajgM/giphy.gif' />
                        </div>
                    </div>

                    <div>
                        <h1>Proyectos actuales</h1>

                        <div>
                            <h1>Raccoon</h1>
                        </div>

                        <div>
                            <h1>Neofetch</h1>
                        </div>
                    </div>
                    <h1>Content</h1>
                </div>
            </div>
        </>
    )
}