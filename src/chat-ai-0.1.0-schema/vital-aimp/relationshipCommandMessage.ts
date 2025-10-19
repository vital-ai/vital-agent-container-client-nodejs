import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationshipCommandMessage
 */
export class RelationshipCommandMessage extends CommandMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RelationshipCommandMessage';
  }

  /**
   * Get property definitions for RelationshipCommandMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
