import Button from "../components/Button/Button";

import { Github } from 'lucide-react'
import { HeaderContainer, Separator } from "./Home.styles";

export default function Home() {
    return (
        <div>
            <HeaderContainer>
                <h1>AI Scripter</h1>
                <div>
                    <span>Desenvoldido com 💙 no NLW da Rocketseat</span>
                    <Separator />
                    <Button text='GitHub' icon={<Github />} />
                </div>
            </HeaderContainer>
        </div>
    )
}
