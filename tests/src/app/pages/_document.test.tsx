import '@testing-library/jest-dom';
import { ReactElement } from 'react';
import SkaoDocument from '@/pages/_document';

describe('SkaoDocument', () => {
  let renderResult: ReactElement;
  beforeEach(() => {
    const doc = new SkaoDocument();
    renderResult = doc.render();
  });

  it('should have a Html component', () => {
    expect(renderResult.props['lang']).toBe('en');
  });

  it('should have two children components', () => {
    const child = renderResult.props['children'];
    expect(child.length).toBe(2);
  });

  it('should have a head and 3 sub-head components', () => {
    expect(typeof renderResult.type).toBe('function');
    expect(renderResult.props['lang']).toBe('en');
    const child = renderResult.props['children'];
    const head = child[0].props['children'];
    expect(head.length).toBe(3);
    const meta = head[0];
    expect(meta['type']).toBe('meta');
    expect(meta.props['name']).toBe('theme-color');
    expect(meta.props['content']).toBe('#556cd6');
    const link1 = head[1];
    expect(link1['type']).toBe('link');
    expect(link1.props['rel']).toBe('shortcut icon');
    expect(link1.props['href']).toBe('/skalogo.ico');
    const link2 = head[2];
    expect(link2['type']).toBe('link');
    expect(link2.props['rel']).toBe('stylesheet');
    expect(link2.props['href']).toBe('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  });

  it('should have a body and 2 sub-components', () => {
    const child = renderResult.props['children'];
    const body = child[1].props['children'];
    expect(body.length).toBe(2);
    expect(typeof body[0]['type']).toBe('function');
    expect(typeof body[1]['type']).toBe('function');
  });
});
