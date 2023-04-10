import React from 'react';
import '../styles/Stat.css'
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons'

const Stats = () => {

    return(
        <section className='stats' id='stats'>
            <ul className='stats-list'>
                {
                    [["Badge icon", "2+", "Years of Experience"],
                    ["Checkmark icon", "56", "Completed Projects"],
                    ["Peoples rating icon", "15", "Happy Clients"]].map((e, i) => {
                        return (
                            <li>
                                <a href='#' className='stats-card'>
                                    <div className='card-icon'>
                                        <img src={require(`../images/stats-card_icon-${i + 1}.png`)} alt={e[0]} />
                                    </div>

                                    <h2 className='h2 card-title'>
                                        {e[1]} <strong>{e[2]}</strong>
                                    </h2>

                                    <IonIcon icon={chevronForwardOutline} />
                                </a>
                            </li>
                        )
                        
                    })
                }
            </ul>
        </section>
    )
}

export default Stats;