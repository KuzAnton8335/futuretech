import "normalize.css";
import "../styles/main.scss";
import ExpandanbleContentCollection from "./ExpandanbleContent";
import Header from "./Header.js";
import TabsCollection from "./Tabs.js";
import VideoPlayerCollection from "./VideoPlayer.js";

// логика появления burger menu в header
new Header();
// логика для TabsCollection появления табов на странице
new TabsCollection();
// логика для видео плеера
new VideoPlayerCollection();
// логика для появления контента при нажатии на кнопку
new ExpandanbleContentCollection();
