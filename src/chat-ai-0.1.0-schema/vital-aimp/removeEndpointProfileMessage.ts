import { EndpointProfileMessage } from './endpointProfileMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RemoveEndpointProfileMessage
 */
export class RemoveEndpointProfileMessage extends EndpointProfileMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RemoveEndpointProfileMessage';
  }

  /**
   * Get property definitions for RemoveEndpointProfileMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
