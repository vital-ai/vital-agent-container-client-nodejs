import { EndpointProfileMessage } from './endpointProfileMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ListEndpointProfilesMessage
 */
export class ListEndpointProfilesMessage extends EndpointProfileMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ListEndpointProfilesMessage';
  }

  /**
   * Get property definitions for ListEndpointProfilesMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
