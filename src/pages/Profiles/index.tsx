import React, { useState, useEffect } from 'react'
import { Container, CardContainer, CardProfile } from './styles'
import Image from '../../images/comida.png'
import api from '../../services/api'
// import { useAuth } from '../../hooks/auth'

interface ProfileInfo {
  id: number
  name: string
  recipes: any[]
  avatar_url: string
}

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileInfo[]>([])
  // const { user } = useAuth()

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users')
      console.log(response.data)

      setProfiles(response.data)
    }
    loadUsers()
  }, [])
  return (
    <Container>
      <CardContainer>
        {profiles.map(profile => (
          <CardProfile key={profile.id} to={`profile/${profile.id}`}>
            {profile.avatar_url ? (
              <img src={profile.avatar_url} alt="author" />
            ) : (
              <img src={Image} alt="author" />
            )}
            <div>
              <div>
                <h3>{profile.name}</h3>
                <p>
                  receitas:
                  {profile.recipes.length}
                </p>
              </div>
            </div>
          </CardProfile>
        ))}
      </CardContainer>
    </Container>
  )
}

export default Profiles
