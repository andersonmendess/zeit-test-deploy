import React, { Component } from 'react';
import { AppCtx }  from '../../app/context/AppContext';
import ProjectLinks from '../../components/common/project-links/links'
import ProjectCredit from '../../components/common/credits'
import Logo from '../../components/common/others/logo'


export class Home extends Component{
    
    render(){

        return (
            <div className='home center'>
                <h3 className="accent welcome">Kraken Open Tentacles Project</h3>

                <Logo size='500'/>

                <div className="home-desc">
                    <div className="desc square accent">LineageOS based ROM</div>
                </div>

                <div className="home-bottom-info">
                    <div className="home-bottom-info-content">
                        <ProjectLinks />
                    </div>
                </div>
                <React.Fragment>
                    <ProjectCredit title='Project maintained by ' username='mamutal91'/>
                    <ProjectCredit title='SPA developed by ' username='andersonmendess'/>
                    <ProjectCredit title='SPA broken by ' username='dattebayorob'/>
                </React.Fragment>

            </div>
        )
    }
}
Home.contextType = AppCtx
export default Home