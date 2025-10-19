import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage
 */
export class HaleyRealtimeMessage extends AIMPMessage {
  public serverSentEventJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage';
  }

  /**
   * Get property definitions for HaleyRealtimeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON',
        tsPropertyName: 'serverSentEventJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
