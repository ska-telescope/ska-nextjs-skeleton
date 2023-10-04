import '@testing-library/jest-dom';
import RootLayout from '@/app/layout';

describe('RootLayout', () => {
  it('renders a main with class main', () => {
    const expectedChild = 'test 1234';
    const children = <p>{expectedChild}</p>;
    const result = <RootLayout>{children}</RootLayout>;
    expect(result).not.toBe(null);
    expect(result.props).not.toBe(null);
    expect(result.props.children).not.toBe(null);
    expect(result.props.children.props).not.toBe(null);
    expect(result.props.children.props.children).toBe(expectedChild);
  });
});
