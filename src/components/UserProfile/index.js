import React from 'react'
import { Footer, Wrapper, Header, SetGoal} from '../../components'


const UserProfile = (props) => { 
    return (
        <>  
            <Header {...props} />
                <Wrapper background="#FFF" marginTop="50px">
                    <SetGoal />
                </Wrapper>                
            <Footer />
        </>
    )
}

export default UserProfile;