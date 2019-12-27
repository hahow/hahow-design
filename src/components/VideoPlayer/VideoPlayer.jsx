import ArtplayerComponent from 'artplayer-react';
import { func, shape } from 'prop-types';
import React from 'react';
import stylePropType from 'react-style-proptype';
import styled from 'styled-components';

import 'artplayer-react/dist/artplayer-react.css';

const StyledArtplayerComponent = styled(ArtplayerComponent)`
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

const VideoPlayer = ({
  getInstance, i18n, onEnded, onFullscreenWebChange, onLoadedData, onPause, onPlay, onPlaying,
  onSeeked, onSeeking, onSettingToggle, onTimeupdate, onWaiting, option, style,
}) => (
  <StyledArtplayerComponent
    option={option}
    style={style}
    getInstance={(art) => {
      if (i18n) { art.i18n.update(i18n); }

      if (onFullscreenWebChange) { art.on('fullscreenWebChange', onFullscreenWebChange); }

      if (onPlaying) {
        art.on('video:playing', (event) => {
          const { currentTime } = event.target;
          onPlaying({ currentTime });
        });
      }
      if (onWaiting) {
        art.on('video:waiting', (event) => {
          const { currentTime } = event.target;
          onWaiting({ currentTime });
        });
      }
      if (onSeeking) {
        art.on('video:seeking', (event) => {
          const { currentTime } = event.target;
          onSeeking({ currentTime });
        });
      }
      if (onSeeked) {
        art.on('video:seeked', (event) => {
          const { currentTime } = event.target;
          onSeeked({ currentTime });
        });
      }
      if (onEnded) { art.on('video:ended', onEnded); }
      if (onLoadedData) { art.on('video:loadeddata', onLoadedData); }
      art.on('video:canplay', () => {
        const assignee = art;
        // 恢復上次的播放速度
        assignee.player.playbackRate = art.storage.get('playbackRate');
      });
      if (onTimeupdate) {
        art.on('video:timeupdate', (event) => {
          const { currentTime } = event.target;
          onTimeupdate({ currentTime });
        });
      }
      if (onPlay) {
        art.on('video:play', (event) => {
          const { currentTime } = event.target;
          onPlay({ currentTime });
        });
      }
      if (onPause) {
        art.on('video:pause', (event) => {
          const { currentTime } = event.target;
          onPause({ currentTime });
        });
      }
      if (onSettingToggle) { art.on('setting:toggle', onSettingToggle); }

      // 記憶播放速度
      art.on('playbackRateChange', (rate) => {
        art.storage.set('playbackRate', rate);
      });

      if (getInstance) { getInstance(art); }
    }}
  />
);

VideoPlayer.propTypes = {
  getInstance: func,
  i18n: shape({}),
  /** When playback of the media reaches the end of the media */
  onEnded: func,
  /** When entering web full screen */
  onFullscreenWebChange: func,
  /**
   * When the frame at the current playback position of the media has finished loading;
   * often the first frame
   */
  onLoadedData: func,
  /**
   * When a request to pause an activity is handled and the activity has entered its paused state
   */
  onPause: func,
  /**
   * When the paused property is changed from true to false, as a result of the play method,
   * or the autoplay attribute
   */
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
  option: shape({}).isRequired,
  style: stylePropType,
};

VideoPlayer.defaultProps = {
  getInstance: null,
  i18n: null,
  onEnded: null,
  onFullscreenWebChange: null,
  onLoadedData: null,
  onPause: null,
  onPlay: null,
  onPlaying: null,
  onSeeked: null,
  onSeeking: null,
  onSettingToggle: null,
  onTimeupdate: null,
  onWaiting: null,
  style: {
    width: '640px',
    height: '360px',
  },
};

export default VideoPlayer;
