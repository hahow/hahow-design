import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { VideoPlayer } from '../src';

export default {
  title: 'VideoPlayer',
  decorators: [withKnobs]
};

export const Basic = () => (
  <VideoPlayer
    option={{
      url: '/BigBuckBunny.mp4',
    }}
  />
);

export const Advanced = () => (
  <VideoPlayer
    option={{
      url: '/BigBuckBunny.mp4',
      poster: 'https://hahow.in/images/5cbeedd4604d520020b07dbf?width=600',
      playbackRate: true,
      aspectRatio: true,
      setting: true,
      fullscreen: true,
      fullscreenWeb: true,
      theme: '#00bea4',
      subtitle: {
        url: '/subtitle.vtt',
      },
      quality: [
        {
          name: '240P',
          url:
            'https://player.vimeo.com/external/331959462.sd.mp4?s=064d5906aa645984edccd67089037155d22cd973&time=292',
        },
        {
          name: '360P',
          url:
            'https://player.vimeo.com/external/331959462.sd.mp4?s=064d5906aa645984edccd67089037155d22cd973&time=839',
        },
        {
          name: '540P',
          url:
            'https://player.vimeo.com/external/331959462.sd.mp4?s=064d5906aa645984edccd67089037155d22cd973&time=254',
        },
        {
          default: true,
          name: '720P',
          url:
            'https://player.vimeo.com/external/331959462.hd.mp4?s=090947ee25783484f63aba45ce03779acf77226b&time=665',
        },
        {
          name: '1080P',
          url:
            'https://player.vimeo.com/external/331959462.hd.mp4?s=090947ee25783484f63aba45ce03779acf77226b&time=190',
        },
      ],
      highlight: [
        {
          time: 3,
          text: 'Database',
        },
        {
          time: 9,
          text: 'A/B Testing',
        },
        {
          time: 15,
          text: 'DRM/AWS/Line',
        },
        {
          time: 28,
          text: '一般人類 vs 工程師',
        },
        {
          time: 40,
          text: '404 Not Found',
        },
        {
          time: 90,
          text: '工程師的日常',
        },
        {
          time: 105,
          text: '工程師的邏輯思維',
        },
        {
          time: 145,
          text: '軟體是如何影響世界的',
        },
      ],
      flip: true,
      pip: true,
      screenshot: true,
      thumbnails: {
        url: '/thumbnails.png',
        width: 100,
        height: 56,
      },
    }}
  />
);

export const Customize = () => (
  <VideoPlayer
    option={{
      url: '/BigBuckBunny.mp4',
      layers: [
        {
          html: '<img src="/logo.png">',
          style: {
            pointerEvents: 'none',
            position: 'absolute',
            right: '8px',
            top: '8px',
          },
        },
      ],
      controls: [
        {
          name: 'backward',
          position: 'left',
          html: 'backward',
          click: ({ art }) => {
            const assignee = art;
            assignee.player.seek = art.player.currentTime - 10;
          },
        },
        {
          name: 'forward',
          position: 'left',
          html: 'forward',
          click: ({ art }) => {
            const assignee = art;
            assignee.player.seek = art.player.currentTime + 10;
          },
        },
      ],
    }}
  />
);

export const Events = () => (
  <VideoPlayer
    option={{
      url: '/BigBuckBunny.mp4',
      fullscreenWeb: true,
      setting: true,
    }}
    onEnded={action('onEnded')}
    onFullscreenWebChange={action('onFullscreenWebChange')}
    onLoadedData={action('onLoadedData')}
    onPause={action('onPause')}
    onPlay={action('onPlay')}
    onPlaying={action('onPlaying')}
    onSeeked={action('onSeeked')}
    onSeeking={action('onSeeking')}
    onSettingToggle={action('onSettingToggle')}
    onTimeupdate={action('onTimeupdate')}
    onWaiting={action('onWaiting')}
  />
);

export const i18n = () => (
  <VideoPlayer
    option={{
      url: '/BigBuckBunny.mp4',
      lang: 'mr',
    }}
    i18n={{
      'mr': {
        Play: 'Bermain',
      },
    }}
  />
);

// export const HLS = () => (
//   <VideoPlayer
//     option={{
//       url: '/BigBuckBunny.mp4',
//     }}
//   />
// );

// export const Plugins = () => (
//   <VideoPlayer
//     option={{
//       url: '/BigBuckBunny.mp4',
//     }}
//   />
// );

i18n.story = {
  name: 'i18n',
};
