import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailEndpoint
 */
export class EmailEndpoint extends Endpoint {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailEndpoint';
  }

  /**
   * Get property definitions for EmailEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
