import { AVAILABLE_LAYOUT, AVAILABLE_WIDGETS } from '@/constants/layout';

export interface LayoutConfig {
  layout: AVAILABLE_LAYOUT;
  arrangements: AVAILABLE_WIDGETS[];
}
