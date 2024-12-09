import './App.css'
import logo from './assets/cropped-logo.png'
import Congratulations from './Congratulations'

export default function App() {
    return(
        <>
            <header>
                <div className='container'>
                    <div className='img'>
                    <a href='https://ist.uisi.ru/' title='На кафедру ИСТ'><img src={logo}></img></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href='#first'>Начало</a></li>
                            <li><a href='#second'>Описание</a></li>
                            <li><a href='#third'>Фотография</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className='first' id='first'>
                <div className='container'>
                    <div className='mainText'>
                        <h1>Боботы</h1>
                    </div>
                    <Congratulations/>
                </div>
            </main>
        </>
    )
}
