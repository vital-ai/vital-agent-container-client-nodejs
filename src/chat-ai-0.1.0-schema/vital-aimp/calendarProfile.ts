import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarProfile
 */
export class CalendarProfile extends EndpointProfile {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CalendarProfile';
  }

  /**
   * Get property definitions for CalendarProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
