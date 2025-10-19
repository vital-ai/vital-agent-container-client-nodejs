import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HeartbeatMessage
 */
export class HeartbeatMessage extends AIMPMessage {
  public lastActivityTime?: number;
  public distribute?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HeartbeatMessage';
  }

  /**
   * Get property definitions for HeartbeatMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastActivityTime',
        tsPropertyName: 'lastActivityTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDistribute',
        tsPropertyName: 'distribute',
        type: 'boolean',
        required: false
      }
    ];
  }


}
