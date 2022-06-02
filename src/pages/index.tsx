import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Photo } from '../ui/components/List/List.style'

const Home: NextPage = () => {
  return (
    <div>
      <Title 
      title="" 
      subtitle={        
        <span> 
          Com um pequeno valor mensal, você <br />
        pode <strong>adotar um pet virtualmente</strong></span>
      }/>  

      <List
        pets={[
          {
            id: 1,
            name: 'Juanzito',
            history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente laborum excepturi a cupiditate iure, nostrum necessitatibus rem voluptate error aspernatur nisi officiis adipisci dignissimos consequuntur! Repellendus earum sit totam.',
            photo: 'https://pbs.twimg.com/media/Da3FmbSWkAEuwUJ.jpg'
          },

          {
            id: 2,
            name: 'Bruno',
            history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente laborum excepturi a cupiditate iure, nostrum necessitatibus rem voluptate error aspernatur nisi officiis adipisci dignissimos consequuntur! Repellendus earum sit totam.',
            photo: 'https://m.extra.globo.com/incoming/24207283-b6a-6a0/w480h720-PROP/caozinho-2.jpg'
          }
        ]}
      />    
    </div>
  )
}

export default Home
