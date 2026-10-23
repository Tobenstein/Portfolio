import ServiceDetail, {offerings} from '../service-detail';
export const metadata={title:offerings['software-development'].title};
export default function Page(){return <ServiceDetail kind="software-development"/>}
