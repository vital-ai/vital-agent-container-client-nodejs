import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestion
 */
export class HaleyQuestion extends VITAL_Node {
  public haleyQuestionStatus?: string;
  public rowNameQuestion?: boolean;
  public questionFriendlyText?: string;
  public description?: string;
  public hiddenInGroupDisplay?: boolean;
  public questionGroupIndex?: number;
  public haleyLanguageType?: string;
  public horizontalColumnAssignment?: number;
  public hiddenQuestion?: boolean;
  public haleyGroupDisplayTypeURI?: string;
  public questionIdentifier?: string;
  public longDescription?: string;
  public dependencyEnabled?: boolean;
  public includeInSectionPopform?: boolean;
  public hiddenInPopform?: boolean;
  public questionAbbreviatedText?: string;
  public notificationContent?: boolean;
  public questionProfessionalText?: string;
  public questionText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuestion';
  }

  /**
   * Get property definitions for HaleyQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionStatus',
        tsPropertyName: 'haleyQuestionStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRowNameQuestion',
        tsPropertyName: 'rowNameQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText',
        tsPropertyName: 'questionFriendlyText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex',
        tsPropertyName: 'questionGroupIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHorizontalColumnAssignment',
        tsPropertyName: 'horizontalColumnAssignment',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenQuestion',
        tsPropertyName: 'hiddenQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI',
        tsPropertyName: 'haleyGroupDisplayTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIdentifier',
        tsPropertyName: 'questionIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongDescription',
        tsPropertyName: 'longDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDependencyEnabled',
        tsPropertyName: 'dependencyEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isIncludeInSectionPopform',
        tsPropertyName: 'includeInSectionPopform',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInPopform',
        tsPropertyName: 'hiddenInPopform',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText',
        tsPropertyName: 'questionAbbreviatedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isNotificationContent',
        tsPropertyName: 'notificationContent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText',
        tsPropertyName: 'questionProfessionalText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionText',
        tsPropertyName: 'questionText',
        type: 'string',
        required: false
      }
    ];
  }


}
