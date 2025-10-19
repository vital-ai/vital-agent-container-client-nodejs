import { KGServiceEvent } from './kgserviceEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#SlackServiceEvent
 */
export class SlackServiceEvent extends KGServiceEvent {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#SlackServiceEvent';
  }

  /**
   * Get property definitions for SlackServiceEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
