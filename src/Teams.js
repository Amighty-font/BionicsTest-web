import react from 'react';
import { Layout } from './components/Layout'
import './App.css';
import testMember from './Photos/test-member.jpg';
import VZhao from './Photos/Edited Headshots/VZhao.jpg';
import JLee from './Photos/Edited Headshots/JLee.jpg';
import BAhyou from './Photos/Edited Headshots/BAyouh.jpg';
import TFang from './Photos/Edited Headshots/TFang.jpg';
import JRoss from './Photos/Edited Headshots/JRoss.jpg';
import LLi from './Photos/Edited Headshots/LLi.jpg';
import KLi from './Photos/Edited Headshots/KLi.jpg';
import APalumbo from './Photos/Edited Headshots/APalumbo.jpg';
import KKochi from './Photos/Edited Headshots/KKochi.jpg';
import MRoss from './Photos/Edited Headshots/MRoss.jpg';
import TBoshoff from './Photos/Edited Headshots/TBoshoff.jpg';
import TPraynito from './Photos/Edited Headshots/TPrayitno.jpg';
import UAli from './Photos/Edited Headshots/UAli.jpg';
import YParikh from './Photos/Edited Headshots/YParikh.jpg';
import NPoon from './Photos/Edited Headshots/NPoon.jpg';
import PJavanrood from './Photos/Edited Headshots/PJavanrood.jpg';
import SWen from './Photos/Edited Headshots/SWen.jpg';
import ZChafe from './Photos/Edited Headshots/ZChafe.jpg';
//Mechanical
import AGovind from './Photos/Edited Headshots/AGovind.jpg';
import AZheWang from './Photos/Edited Headshots/AZheWang.jpg';
import DStarck from './Photos/Edited Headshots/DStarck.jpg';
import GJanes from './Photos/Edited Headshots/GJanes.jpg';
import GGould from './Photos/Edited Headshots/GGould.jpg';
import JChiusa from './Photos/Edited Headshots/JChiusa.jpg';
import JXi from './Photos/Edited Headshots/JXi.jpg';
import JAhyou from './Photos/Edited Headshots/JAhyou.jpg';
import OHetland from './Photos/Edited Headshots/OHetland.jpg';
//Captain
import EFlaschner from './Photos/Edited Headshots/EFlaschner.jpg';


export const Teams = () => {
    return(
        <div class="container">

            <div class="row">
                <div class="py-5 "/> 
                <div class="col-md-6">
                    <img class="captain img-responsive center-block d-block mx-auto" alt='' src={EFlaschner} />
                </div>
                <div class="col-md-6">
                    HELLO THERE
                </div>


            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="py-5"/> 
                        <img class="teamimg img-responsive center-block d-block mx-auto" alt='' src={VZhao} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">ADMIN SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                </div>
                    <div class="col-sm">
                        <div class="py-4" />
                        <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={JLee} />
                        <div class="py-2" />
                        <p class="text-center">JUDY LEE</p>
                        <div class="py-1" />
                        <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={BAhyou} />
                        <div class="py-2" />
                        <p class="text-center">BRANDON AHYOU</p>
                    </div>
                    <div class="col-sm">
                        <div class="py-4" />
                        <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={TFang} />
                        <div class="py-2" />
                        <p class="text-center">TIMOTHY FANG</p>
                        <div class="py-1" />
                    </div>
            </div>

            <div class="row partTwo">
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg-z img-responsive center-block d-block mx-auto" alt='' src={JRoss} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">ANALYTICS SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>

            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg-z img-responsive center-block d-block mx-auto" alt='' src={LLi} />
                <div class="py-2" />
                <p class="text-center">LEON LI</p>
                <div class="py-1" />
            </div>
            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg-z img-responsive center-block d-block mx-auto" alt='' src={KLi} />
                <div class="py-2" />
                <p class="text-center">KIRA LI</p>
                <div class="py-1" />
                </div>
            </div>            
        
            <div class="row">
                <div class="py-2"/>
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg img-responsive center-block d-block mx-auto" alt='' src={KKochi} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={APalumbo} />
                    <div class="py-2" />
                    <p class="text-center">ALESSIA PALUMBO</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={MRoss} />
                     <div class="py-2" />
                     <p class="text-center">MICHAEL ROSS</p>
                     <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={YParikh} />
                    <div class="py-2" />
                    <p class="text-center">YASH PARIKH</p>
                </div>
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={TBoshoff} />
                    <div class="py-2" />
                    <p class="text-center">TIANN BOSHOFF</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={TPraynito} />
                    <div class="py-2" />
                    <p class="text-center">TIFFANY PRAYITNO</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={UAli} />
                    <div class="py-2" />
                    <p class="text-center">UMAR ALI</p>
                    <div class="py-1" />
                </div>
                <div class="py-4"/>
            </div>

            <div class="row partTwo">
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg-z img-responsive center-block d-block mx-auto" alt='' src={NPoon} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">EMBEDDED SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>

            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg-z img-responsive center-block d-block mx-auto" alt='' src={ZChafe} />
                <div class="py-2" />
                <p class="text-center">ZACHARY CHAFE</p>
                <div class="py-1" />
                <img class="memberimg-z img-responsive center-block d-block mx-auto" alt='' src={SWen} />
                <div class="py-2" />
                <p class="text-center">SHUYAO WEN</p>
                <div class="py-1" />
            </div>
            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg-z img-responsive center-block d-block mx-auto" alt='' src={PJavanrood} />
                <div class="py-2" />
                <p class="text-center">PARSHAN JAVANROOD</p>
                <div class="py-1" />
                </div>
            </div>   

            <div class="row">
                <div class="py-2"/>
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg img-responsive center-block d-block mx-auto" alt='' src={AGovind} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">MECHANICAL SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={AZheWang} />
                    <div class="py-2" />
                    <p class="text-center">ANDREW ZHE WANG</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={DStarck} />
                     <div class="py-2" />
                     <p class="text-center">DOMINIC STARCK</p>
                     <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={GJanes} />
                    <div class="py-2" />
                    <p class="text-center">GIOVANNA JANES</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={OHetland} />
                    <div class="py-2" />
                    <p class="text-center">OLIVIA HETLAND</p>
                    <div class="py-1" />
                </div>
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={GGould} />
                    <div class="py-2" />
                    <p class="text-center">GRACE GOULD</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={JChiusa} />
                    <div class="py-2" />
                    <p class="text-center">JEDIDAH CHIUSA</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={JAhyou} />
                    <div class="py-2" />
                    <p class="text-center">JULIEN AH YOU</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={JXi} />
                    <div class="py-2" />
                    <p class="text-center">JOYCE XI</p>
                    <div class="py-1" />
                </div>
            </div>
            <div class="py-4"/>
            
        
        </div>
        
        
    );
}