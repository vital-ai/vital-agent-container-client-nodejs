import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#InteractionModeMessage
 */
export class InteractionModeMessage extends AIMPMessage {
  public interactionMode?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#InteractionModeMessage';
  }

  /**
   * Get property definitions for InteractionModeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInteractionMode',
        tsPropertyName: 'interactionMode',
        type: 'string',
        required: false
      }
    ];
  }


}
