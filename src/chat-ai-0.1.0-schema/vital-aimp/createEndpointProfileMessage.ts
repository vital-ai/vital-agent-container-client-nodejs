import { EndpointProfileMessage } from './endpointProfileMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CreateEndpointProfileMessage
 */
export class CreateEndpointProfileMessage extends EndpointProfileMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CreateEndpointProfileMessage';
  }

  /**
   * Get property definitions for CreateEndpointProfileMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
