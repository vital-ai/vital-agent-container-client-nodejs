import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInEndpoint
 */
export class LinkedInEndpoint extends Endpoint {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInEndpoint';
  }

  /**
   * Get property definitions for LinkedInEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
