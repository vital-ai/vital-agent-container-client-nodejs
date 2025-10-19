import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IFrameEventMessage
 */
export class IFrameEventMessage extends AIMPMessage {
  public eventType?: string;
  public propertyValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#IFrameEventMessage';
  }

  /**
   * Get property definitions for IFrameEventMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventType',
        tsPropertyName: 'eventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      }
    ];
  }


}
