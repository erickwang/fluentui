import { ax, makeOverrides } from '@fluentui/react-make-styles';
import { AvatarState } from './Avatar.types';

//
// TODO: All animation constants should go to theme or globals?
//

const animationDuration = {
  duration50: '50ms',
  duration100: '100ms',
  duration150: '150ms',
  duration200: '200ms',
  duration300: '300ms',
  duration400: '400ms',
  duration500: '500ms',
};

const animationTiming = {
  ultraFast: animationDuration.duration50,
  faster: animationDuration.duration100,
  fast: animationDuration.duration150,
  normal: animationDuration.duration200,
  slow: animationDuration.duration300,
  slower: animationDuration.duration400,
  ultraSlow: animationDuration.duration500,
};

const animationLines = {
  decelerateMax: 'cubic-bezier(0.00,0.00,0.00,1.00)',
  decelerateMid: 'cubic-bezier(0.10,0.90,0.20,1.00)',
  decelerateMin: 'cubic-bezier(0.33,0.00,0.10,1.00)',
  accelerateMax: 'cubic-bezier(1.00,0.00,1.00,1.00)',
  accelerateMid: 'cubic-bezier(0.90,0.10,1.00,0.20)',
  accelerateMin: 'cubic-bezier(0.80,0.00,0.78,1.00)',
  maxEasyEase: 'cubic-bezier(0.80,0.00,0.20,1.00)',
  easyEase: 'cubic-bezier(0.33,0.00,0.67,1.00)',
  linear: 'linear',
};

const animations = {
  fastOutSlowInMax: animationLines.decelerateMax,
  fastOutSlowInMid: animationLines.decelerateMid,
  fastOutSlowInMin: animationLines.decelerateMin,
  slowOutFastInMax: animationLines.accelerateMax,
  slowOutFastInMid: animationLines.accelerateMid,
  slowOutFastInMin: animationLines.accelerateMin,
  fastEase: animationLines.maxEasyEase,
  normalEase: animationLines.easyEase,
  nullEasing: animationLines.linear,
};

const useStyles = makeOverrides({
  root: tokens => ({
    display: 'inline-block',
    flexShrink: 0,
    position: 'relative',
    verticalAlign: 'middle',

    borderRadius: tokens.global.borderRadius.circular,

    width: '32px',
    height: '32px',

    fontFamily: tokens.global.type.fontFamilies.base,
    fontSize: tokens.global.type.fontSizes.base[300],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),

  rootSize20: tokens => ({
    width: '20px',
    height: '20px',

    fontSize: tokens.global.type.fontSizes.base[100],
    fontWeight: tokens.global.type.fontWeights.regular,
  }),
  rootSize24: tokens => ({
    width: '24px',
    height: '24px',

    fontSize: tokens.global.type.fontSizes.base[100],
    fontWeight: tokens.global.type.fontWeights.regular,
  }),

  rootSize28: tokens => ({
    width: '28px',
    height: '28px',

    fontSize: tokens.global.type.fontSizes.base[200],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize32: tokens => ({
    width: '32px',
    height: '32px',

    fontSize: tokens.global.type.fontSizes.base[300],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize36: tokens => ({
    width: '36px',
    height: '36px',

    fontSize: tokens.global.type.fontSizes.base[300],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize40: tokens => ({
    width: '40px',
    height: '40px',

    fontSize: tokens.global.type.fontSizes.base[300],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize48: tokens => ({
    width: '48px',
    height: '48px',

    fontSize: tokens.global.type.fontSizes.base[400],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize56: tokens => ({
    width: '56px',
    height: '56px',

    fontSize: tokens.global.type.fontSizes.base[400],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize64: tokens => ({
    width: '64px',
    height: '64px',

    fontSize: tokens.global.type.fontSizes.base[500],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize72: tokens => ({
    width: '72px',
    height: '72px',

    fontSize: tokens.global.type.fontSizes.base[500],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize96: tokens => ({
    width: '96px',
    height: '96px',

    fontSize: tokens.global.type.fontSizes.base[500],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize120: tokens => ({
    width: '120px',
    height: '120px',

    fontSize: tokens.global.type.fontSizes.base[600],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),
  rootSize128: tokens => ({
    width: '128px',
    height: '128px',

    fontSize: tokens.global.type.fontSizes.base[600],
    fontWeight: tokens.global.type.fontWeights.semibold,
  }),

  rootSquare: tokens => ({ borderRadius: tokens.global.borderRadius.medium }),
  rootSquareSmall: tokens => ({ borderRadius: tokens.global.borderRadius.small }),
  rootSquareLarge: tokens => ({ borderRadius: tokens.global.borderRadius.large }),

  rootSquareXLarge: tokens => ({ borderRadius: tokens.global.borderRadius.xLarge }),

  rootActiveInactive: {
    transform: 'perspective(1px)', // Work-around for text pixel snapping at the end of the animation
    // eslint-disable-next-line @fluentui/max-len
    transition: `transform ${animationTiming.ultraSlow} ${animations.fastEase}, opacity ${animationTiming.faster} ${animations.nullEasing}`,

    ':before': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,

      borderRadius: 'inherit',
      // eslint-disable-next-line @fluentui/max-len
      transition: `margin ${animationTiming.ultraSlow} ${animations.fastEase}, opacity ${animationTiming.slower} ${animations.nullEasing}`,
    },
  },

  rootInactive: {
    opacity: '0.8',
    transform: 'scale(0.875)',
    // eslint-disable-next-line @fluentui/max-len
    transition: `transform ${animationTiming.ultraSlow} ${animations.fastOutSlowInMin}, opacity ${animationTiming.faster} ${animations.nullEasing}`,

    ':before': {
      margin: 0,
      opacity: 0,
      // eslint-disable-next-line @fluentui/max-len
      transition: `margin ${animationTiming.ultraSlow} ${animations.fastOutSlowInMin}, opacity ${animationTiming.slower} ${animations.nullEasing}`,
    },
  },

  rootActiveRing: tokens => ({
    ':before': {
      borderColor: tokens.alias.color.neutral.brandForeground, // TODO: use valid token
      borderStyle: 'solid',
      borderWidth: tokens.global.strokeWidth.thick,

      margin: `calc(-2 * ${tokens.global.strokeWidth.thick})`,
    },
  }),

  rootActiveRingMedium: tokens => ({
    ':before': {
      margin: `calc(-2 * ${tokens.global.strokeWidth.thicker})`,
      borderWidth: tokens.global.strokeWidth.thicker,
    },
  }),
  rootActiveRingLarge: tokens => ({
    ':before': {
      margin: `calc(-2 * ${tokens.global.strokeWidth.thickest})`,
      borderWidth: tokens.global.strokeWidth.thickest,
    },
  }),

  rootActiveShadow: tokens => ({
    ':before': { boxShadow: tokens.alias.shadow.shadow8 },
  }),
  rootActiveShadowSmall: tokens => ({
    ':before': { boxShadow: tokens.alias.shadow.shadow4 },
  }),
  rootActiveShadowMedium: tokens => ({
    ':before': { boxShadow: tokens.alias.shadow.shadow16 },
  }),
  rootActiveShadowLarge: tokens => ({
    ':before': { boxShadow: tokens.alias.shadow.shadow28 },
  }),

  // TODO: use proper tokens instead of "rgba(0,120,212,0.3)"
  rootActiveGlow: tokens => ({
    ':before': {
      boxShadow: `${tokens.alias.shadow.shadow8}, 0 0 8px 2px rgba(0,120,212,0.3)`,
    },
  }),
  rootActiveGlowSmall: tokens => ({
    ':before': {
      boxShadow: `${tokens.alias.shadow.shadow4}, 0 0 4px 2px rgba(0,120,212,0.3)`,
    },
  }),
  rootActiveGlowMedium: tokens => ({
    ':before': {
      boxShadow: `${tokens.alias.shadow.shadow16}, 0 0 8px 2px rgba(0,120,212,0.3)`,
    },
  }),
  rootActiveGlowLarge: tokens => ({
    ':before': {
      boxShadow: `${tokens.alias.shadow.shadow28}, 0 0 28px 4px rgba(0,120,212,0.3)`,
    },
  }),

  rootHasIcon: {
    fontSize: '16px',
    fontWeight: 'initial',
  },
  rootHasIcon12: {
    fontSize: '12px',
  },
  rootHasIcon24: {
    fontSize: '24px',
  },
  rootHasIcon40: {
    fontSize: '40px',
  },
  rootHasIcon48: {
    fontSize: '48px',
  },

  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  badgeSize20: { '--badge-size': 'calc(20px / 4)' },
  badgeSize24: { '--badge-size': 'calc(24px / 4)' },
  badgeSize28: { '--badge-size': 'calc(28px / 4)' },
  badgeSize32: { '--badge-size': 'calc(32px / 4)' },
  badgeSize36: { '--badge-size': 'calc(36px / 4)' },
  badgeSize40: { '--badge-size': 'calc(40px / 4)' },
  badgeSize48: { '--badge-size': 'calc(48px / 4)' },
  badgeSize56: { '--badge-size': 'calc(56px / 4)' },
  badgeSize64: { '--badge-size': 'calc(64px / 4)' },
  badgeSize72: { '--badge-size': 'calc(72px / 4)' },
  badgeSize96: { '--badge-size': 'calc(96px / 4)' },
  badgeSize120: { '--badge-size': 'calc(120px / 4)' },
  badgeSize128: { '--badge-size': 'calc(128px / 4)' },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    borderRadius: 'inherit',
    objectFit: 'cover', // TODO:  does not work in IE11
    verticalAlign: 'top',
  },

  label: tokens => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    textAlign: 'center',
    borderRadius: 'inherit',

    color: tokens.alias.color.neutral.neutralForeground3,
    background: tokens.alias.color.neutral.neutralBackground6,
  }),

  labelBrand: tokens => ({
    color: tokens.alias.color.neutral.neutralForegroundInverted,
    background: tokens.alias.color.brand.brandBackground,
  }),
});

export const useAvatarStyles = (state: AvatarState): AvatarState => {
  const classes = useStyles();

  state.className = ax(
    classes.root,
    classes[`rootSize${state.size}` as keyof typeof classes],

    state.square && classes.rootSquare,
    state.square && (state.size === 20 || state.size === 24) && classes.rootSquareSmall,
    state.square && (state.size === 56 || state.size === 64 || state.size === 72) && classes.rootSquareLarge,
    state.square && (state.size === 96 || state.size === 120 || state.size === 128) && classes.rootSquareXLarge,

    (state.active === 'active' || state.active === 'inactive') && classes.rootActiveInactive,
    state.active === 'inactive' && classes.rootInactive,

    state.activeRing && classes.rootActiveRing,
    state.activeRing && (state.size === 48 || state.size === 56 || state.size === 64) && classes.rootActiveRingMedium,
    state.activeRing &&
      (state.size === 72 || state.size === 96 || state.size === 120 || state.size === 128) &&
      classes.rootActiveRingLarge,

    state.activeShadow && classes.rootActiveShadow,
    state.activeShadow &&
      (state.size === 20 || state.size === 24 || state.size === 28) &&
      classes.rootActiveShadowSmall,
    state.activeShadow &&
      (state.size === 48 || state.size === 56 || state.size === 64) &&
      classes.rootActiveShadowMedium,
    state.activeShadow &&
      (state.size === 72 || state.size === 96 || state.size === 120 || state.size === 128) &&
      classes.rootActiveShadowLarge,

    state.activeGlow && classes.rootActiveGlow,
    state.activeGlow && (state.size === 20 || state.size === 24 || state.size === 28) && classes.rootActiveGlowSmall,
    state.activeGlow && (state.size === 48 || state.size === 56 || state.size === 64) && classes.rootActiveGlowMedium,
    state.activeGlow &&
      (state.size === 72 || state.size === 96 || state.size === 120 || state.size === 128) &&
      classes.rootActiveShadowLarge,

    state.hasIcon && classes.rootHasIcon,
    state.hasIcon && (state.size === 20 || state.size === 24) && classes.rootHasIcon12,
    state.hasIcon &&
      (state.size === 48 || state.size === 56 || state.size === 64 || state.size === 72) &&
      classes.rootHasIcon24,
    state.hasIcon && state.size === 96 && classes.rootHasIcon40,
    state.hasIcon && (state.size === 120 || state.size === 128) && classes.rootHasIcon48,

    state.className,
  );

  if (state.badge) {
    state.badge.className = ax(
      classes.badge,
      classes[`badgeSize${state.size}` as keyof typeof classes],

      state.badge.className,
    );
  }

  if (state.image) {
    state.image.className = ax(classes.image, state.image.className);
  }

  if (state.label) {
    state.label.className = ax(
      classes.label,
      state.colorVariant === 'brand' && classes.labelBrand,

      state.label.className,
    );
  }

  return state;
};
