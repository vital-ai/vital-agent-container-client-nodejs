import { HaleyMindRequest } from '../haley/haleyMindRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#ActorMindRequest
 */
export class ActorMindRequest extends HaleyMindRequest {
  public streamModelResults?: boolean;
  public actorSequence?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#ActorMindRequest';
  }

  /**
   * Get property definitions for ActorMindRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isStreamModelResults',
        tsPropertyName: 'streamModelResults',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasActorSequence',
        tsPropertyName: 'actorSequence',
        type: 'string',
        required: false
      }
    ];
  }


}
