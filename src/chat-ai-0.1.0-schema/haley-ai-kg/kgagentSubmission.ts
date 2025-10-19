import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission
 */
export class KGAgentSubmission extends KGNode {
  public kGAgentSubmissionApproved?: boolean;
  public kGAgentSubmissionDateTime?: string | Date;
  public kGAgentSubmissionConverted?: boolean;
  public kGAgentSubmissionSubmitterName?: string;
  public kGAgentSubmissionType?: string;
  public kGAgentSubmissionURL?: string;
  public kGAgentSubmissionReviewed?: boolean;
  public kGAgentSubmissionDescription?: string;
  public kGAgentSubmissionName?: string;
  public kGAgentSubmissionCreator?: string;
  public kGAgentSubmissionComments?: string;
  public kGAgentSubmissionSubmitterEmail?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission';
  }

  /**
   * Get property definitions for KGAgentSubmission
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionApproved',
        tsPropertyName: 'kGAgentSubmissionApproved',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDateTime',
        tsPropertyName: 'kGAgentSubmissionDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionConverted',
        tsPropertyName: 'kGAgentSubmissionConverted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterName',
        tsPropertyName: 'kGAgentSubmissionSubmitterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionType',
        tsPropertyName: 'kGAgentSubmissionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionURL',
        tsPropertyName: 'kGAgentSubmissionURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionReviewed',
        tsPropertyName: 'kGAgentSubmissionReviewed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDescription',
        tsPropertyName: 'kGAgentSubmissionDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionName',
        tsPropertyName: 'kGAgentSubmissionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionCreator',
        tsPropertyName: 'kGAgentSubmissionCreator',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionComments',
        tsPropertyName: 'kGAgentSubmissionComments',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterEmail',
        tsPropertyName: 'kGAgentSubmissionSubmitterEmail',
        type: 'string',
        required: false
      }
    ];
  }


}
