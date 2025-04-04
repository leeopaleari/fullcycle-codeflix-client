import { useHandleHeaderBackground } from '@/common/ui/Header/hooks/useHandleHeaderBackground';
import { renderHook } from '@testing-library/react';

describe('useHandleHeaderBackground', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useHandleHeaderBackground());
    console.log(result);
    global.window.scrollY = 100;
    console.log(result);
  });
});
