
import { Appbar } from './sub-components/Appbar';
import { Balance } from './sub-components/Balance';
import { Users } from './sub-components/Users';

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={10000} />
            <Users/>
        </div>
    </div>
}