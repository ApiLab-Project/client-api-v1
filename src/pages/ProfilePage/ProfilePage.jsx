import AsideDashboard from '../../components/AsideDashboard/AsideDashboard'
import BottomBox from '../../components/BottomBox/BottomBox'
import TopBox from '../../components/TopBox/TopBox'
import { ProfileContainer } from './styled.ProfilePage'

export default function ProfilePage() {
  return (
    <ProfileContainer>
          <div className="flex-1 flex flex-wrap">
            <AsideDashboard/>
            <div className="flex-1 p-4 w-full md:w-1/2">
              <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                <TopBox/>
              </div>
              <BottomBox/>
            </div>
          </div>
    </ProfileContainer>
  )
}
