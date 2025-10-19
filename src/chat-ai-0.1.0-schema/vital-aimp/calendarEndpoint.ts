import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarEndpoint
 */
export class CalendarEndpoint extends Endpoint {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CalendarEndpoint';
  }

  /**
   * Get property definitions for CalendarEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
