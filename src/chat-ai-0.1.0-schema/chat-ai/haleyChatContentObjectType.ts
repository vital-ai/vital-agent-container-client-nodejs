import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatContentObjectType
 */
export class HaleyChatContentObjectType extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatContentObjectType';
  }

  /**
   * Get property definitions for HaleyChatContentObjectType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
