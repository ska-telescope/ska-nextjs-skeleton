import * as React from 'react';

export const ERROR_1 = ['#FF5F52', '#C62828', '#8A0000', '#000000', '#FFFFFF', '#FFFFFF'];
export const ERROR_2 = ['#FFFF6B', '#FDD835', '#C6A700', '#000000', '#000000', '#000000'];
export const ERROR_3 = ['#FFBD45', '#FB8C00', '#C25E00', '#000000', '#FFFFFF', '#000000'];
export const ERROR_4 = ['#FF6090', '#E91E63', '#B0003A', '#000000', '#000000', '#FFFFFF'];
export const ERROR_5 = ['#FFFFFF', '#000000', '#C2C2C2', '#000000', '#FFFFFF', '#000000'];
export const SUCCESS = ['#6ABF69', '#388E3C', '#00600F', '#000000', '#FFFFFF', '#FFFFFF'];

const DEFAULT_SIZE = 60;
const STROKE_WIDTH = 2;

interface StatusProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: React.ReactElement | string;
  level?: number;
  size?: number;
  testId: string;
  text?: string;
}

function fontSize(value: number) {
  return `${value * 3.5}%`;
}

function getColor(level: number, col: number) {
  switch (level) {
  case 0:
    return SUCCESS[col];
  case 1:
    return ERROR_1[col];
  case 2:
    return ERROR_2[col];
  case 3:
    return ERROR_3[col];
  case 4:
    return ERROR_4[col];
  default:
    return 'white';
  }
}

function fillColor(value: number) {
  return getColor(value, 1);
}

function textColor(value: number) {
  return getColor(value, 4);
}

function textHeight(value: number) {
  let result = '50%';
  if (value === 2) {
    result = '70%';
  }
  if (value === 3) {
    result = '30%';
  }
  return result;
}

function points(level: number, size: number) {
  const half = (size / 2).toString();
  const full = (size - STROKE_WIDTH).toString();
  switch (level) {
  case 2:
    return `${half} ${STROKE_WIDTH},${full} ${full}, ${STROKE_WIDTH} ${full}, ${half} ${STROKE_WIDTH}`;
  case 3:
    return `${STROKE_WIDTH} ${STROKE_WIDTH}, ${full} ${STROKE_WIDTH}, ${half} ${full}, ${STROKE_WIDTH} ${STROKE_WIDTH}`;
  default:
    return `${half} ${STROKE_WIDTH},${full} ${half}, ${half} ${full}, ${STROKE_WIDTH} ${half}, ${half} ${STROKE_WIDTH}`;
  }
}

function showText(level: number, size: number, text: string) {
  return (
    <text
      aria-describedby={text}
      aria-description={text}
      x="50%"
      y={textHeight(typeof level === 'number' ? level : 9)}
      alignmentBaseline="central"
      dominantBaseline="central"
      fontSize={fontSize(size ? size : DEFAULT_SIZE)}
      textAnchor="middle"
      textLength={size ? size / 2 : DEFAULT_SIZE}
      lengthAdjust="spacingAndGlyphs"
      fill={textColor(typeof level === 'number' ? level : 9)}
    >
      {text}
    </text>
  );
}

export function Status({
  ariaDescription = 'Various shapes and colours to indicate the status',
  ariaTitle = 'Status Indicator',
  children,
  level = 9,
  size = DEFAULT_SIZE,
  testId,
  text = '',
}: StatusProps) {
  const componentClassNames = ['svg-content'];

  return (
    <svg
      aria-label={ariaTitle + ' ' + level}
      aria-describedby={ariaTitle + ' ' + level + ' ' + ariaDescription}
      data-testid={testId}
      className={componentClassNames.join(' ')}
      preserveAspectRatio="xMinYMin meet"
      role="img"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="svg-title">{ariaTitle + ' ' + level}</title>
      <desc id="svg-description">{ariaDescription}</desc>
      {(!level || level < 0 || level > 5) && (
        <g>
          <path d="" transform="translate(-45 -15)" role="presentation" />
        </g>
      )}
      {level === 1 && (
        <rect
          aria-describedby={level.toString()}
          role="img"
          x={STROKE_WIDTH}
          y={STROKE_WIDTH}
          width={(size ? size : DEFAULT_SIZE) - STROKE_WIDTH * 2}
          height={(size ? size : DEFAULT_SIZE) - STROKE_WIDTH * 2}
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {(level === 2 || level === 3 || level === 4) && (
        <polyline
          aria-describedby={level.toString()}
          role="img"
          points={points(level, size ? size : DEFAULT_SIZE)}
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {(level === 0 || level === 5) && (
        <circle
          aria-describedby={level.toString()}
          role="img"
          cx={size ? size / 2 : DEFAULT_SIZE}
          cy={size ? size / 2 : DEFAULT_SIZE}
          r={size ? (size - STROKE_WIDTH) / 2 : DEFAULT_SIZE - STROKE_WIDTH}
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {text && showText(level, size, text)}
      {children}
    </svg>
  );
}
