import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SessionEndpoint
 */
export class SessionEndpoint extends Endpoint {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SessionEndpoint';
  }

  /**
   * Get property definitions for SessionEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
