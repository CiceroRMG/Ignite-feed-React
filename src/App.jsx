import { Header } from "./components/header/Header";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <Post />

      </div>
    </>
  )
}
