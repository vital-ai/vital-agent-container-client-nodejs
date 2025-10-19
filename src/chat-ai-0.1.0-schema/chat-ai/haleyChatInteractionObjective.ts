import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInteractionObjective
 */
export class HaleyChatInteractionObjective extends VITAL_Node {
  public currentInteractionObjective?: boolean;
  public haleyChatInteractionObjectiveTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInteractionObjective';
  }

  /**
   * Get property definitions for HaleyChatInteractionObjective
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isCurrentInteractionObjective',
        tsPropertyName: 'currentInteractionObjective',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionObjectiveTypeURI',
        tsPropertyName: 'haleyChatInteractionObjectiveTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
