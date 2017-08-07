import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Slider
  'slick-slider': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    MsTouchAction: 'pan-y',
    touchAction: 'pan-y',
    WebkitTapHighlightColor: 'transparent'
  },
  'slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'slick-list:focus': {
    outline: 'none'
  },
  'slick-listdragging': {
    cursor: 'pointer',
    cursor: 'hand'
  },
  'slick-slider slick-track': {
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    MsTransform: 'translate3d(0, 0, 0)',
    OTransform: 'translate3d(0, 0, 0)',
    transform: 'translate3d(0, 0, 0)'
  },
  'slick-slider slick-list': {
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    MsTransform: 'translate3d(0, 0, 0)',
    OTransform: 'translate3d(0, 0, 0)',
    transform: 'translate3d(0, 0, 0)'
  },
  'slick-track': {
    position: 'relative',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    display: 'block'
  },
  'slick-track:before': {
    display: 'table',
    content: ''''
  },
  'slick-track:after': {
    display: 'table',
    content: ''''
  },
  'slick-track:after': {
    clear: 'both'
  },
  'slick-loading slick-track': {
    visibility: 'hidden'
  },
  'slick-slide': {
    display: 'none',
    float: 'left',
    outline: 'none',
    height: [{ unit: '%V', value: 1 }],
    minHeight: [{ unit: 'px', value: 1 }]
  },
  '[dir='rtl'] slick-slide': {
    float: 'right'
  },
  'slick-slide img': {
    display: 'block'
  },
  'slick-slideslick-loading img': {
    display: 'none'
  },
  'slick-slidedragging img': {
    pointerEvents: 'none'
  },
  'slick-initialized slick-slide': {
    display: 'block'
  },
  'slick-loading slick-slide': {
    visibility: 'hidden'
  },
  'slick-vertical slick-slide': {
    display: 'block',
    height: [{ unit: 'string', value: 'auto' }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }]
  },
  'slick-arrowslick-hidden': {
    display: 'none'
  }
});
