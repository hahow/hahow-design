import ArtplayerComponent from 'artplayer-react';
import { func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import 'artplayer-react/dist/artplayer-react.css';

const StyledContainer = styled.div`
  & .art-subtitle {
    transition: bottom 0.2s ease;
  }
  & .art-hide-cursor .art-subtitle {
    bottom: 16px; /* 控制列隱藏之後，字幕移至下方 */
  }
  & .art-subtitle p {
    /* 字幕透明黑底背景，數值直接致敬 YouTube 的 */
    background-color: rgba(8, 8, 8, 0.75);
    border-radius: 2.48889px;
    display: inline-block;
    padding: 4px;
  }
`;

const VideoPlayer = (props) => (
  <ArtplayerComponent
    option={props.option}
    style={props.style}
    getInstance={art => {
      props.i18n && art.i18n.update(props.i18n);

      props.onFullscreenWebChange && art.on('fullscreenWebChange', props.onFullscreenWebChange);

      props.onPlaying && art.on('video:playing', () => {
        const currentTime = event.target.currentTime;
        props.onPlaying({ currentTime });
      });
      props.onWaiting && art.on('video:waiting', () => {
        const currentTime = event.target.currentTime;
        props.onWaiting({ currentTime });
      });
      props.onSeeking && art.on('video:seeking', () => {
        const currentTime = event.target.currentTime;
        props.onSeeking({ currentTime });
      });
      props.onSeeked && art.on('video:seeked', () => {
        const currentTime = event.target.currentTime;
        props.onSeeked({ currentTime });
      });
      props.onEnded && art.on('video:ended', props.onEnded);
      props.onLoadedData && art.on('video:loadeddata', props.onLoadedData);
      art.on('video:canplay', () => {
        // 恢復上次的播放速度
        art.player.playbackRate = art.storage.get('playbackRate');
      });
      props.onTimeupdate && art.on('video:timeupdate', (event) => {
        const currentTime = event.target.currentTime;
        props.onTimeupdate({ currentTime });
      });
      props.onPlay && art.on('video:play', () => {
        const currentTime = event.target.currentTime;
        props.onPlay({ currentTime });
      });
      props.onPause && art.on('video:pause', () => {
        const currentTime = event.target.currentTime;
        props.onPause({ currentTime });
      });
      
      props.onSettingToggle && art.on('setting:toggle', props.onSettingToggle);

      // 記憶播放速度
      art.on('playbackRateChange', (rate) => {
        art.storage.set('playbackRate', rate);
      });

      props.getInstance && props.getInstance(art);
    }}
  />
);

VideoPlayer.propTypes = {
  /** When playback of the media reaches the end of the media */
  onEnded: func,
  /** When entering web full screen */
  onFullscreenWebChange: func,
  /** When the frame at the current playback position of the media has finished loading; often the first frame */
  onLoadedData: func,
  /** When a request to pause an activity is handled and the activity has entered its paused state */
  onPause: func,
  /** When the paused property is changed from true to false, as a result of the play method, or the autoplay attribute */
  onPlay: func,
  /** When playback is ready to start after having been paused or delayed due to lack of data */
  onPlaying: func,
  /** When a seek operation completed, the current playback position has changed */
  onSeeked: func,
  /** When a seek operation starts, meaning the media is seeking a new position */
  onSeeking: func,
  /** When displaying setting */
  onSettingToggle: func,
  /** When the time indicated by the `currentTime` attribute has been updated */
  onTimeupdate: func,
  /** When playback has stopped because of a temporary lack of data */
  onWaiting: func,
};

VideoPlayer.defaultProps = {
  style: {
    width: '640px',
    height: '360px',
  },
};

export default VideoPlayer;
