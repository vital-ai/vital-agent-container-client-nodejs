import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyRow
 */
export class HaleyRow extends VITAL_Node {
  public rowHorizontalColumnNameList?: string;
  public rowHorizontalMaxColumns?: number;
  public associatedWithMapping?: boolean;
  public questionFriendlyText?: string;
  public hiddenInGroupDisplay?: boolean;
  public questionGroupIndex?: number;
  public haleyLanguageType?: string;
  public haleyRowTypeURI?: string;
  public haleyGroupDisplayTypeURI?: string;
  public calculatedRowValue?: boolean;
  public rowIndex?: number;
  public readOnlyRowValue?: boolean;
  public rowCounter?: string;
  public questionAbbreviatedText?: string;
  public rowID?: string;
  public mappingObjectName?: string;
  public questionProfessionalText?: string;
  public questionText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyRow';
  }

  /**
   * Get property definitions for HaleyRow
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowHorizontalColumnNameList',
        tsPropertyName: 'rowHorizontalColumnNameList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowHorizontalMaxColumns',
        tsPropertyName: 'rowHorizontalMaxColumns',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAssociatedWithMapping',
        tsPropertyName: 'associatedWithMapping',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI',
        tsPropertyName: 'haleyRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI',
        tsPropertyName: 'haleyGroupDisplayTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isCalculatedRowValue',
        tsPropertyName: 'calculatedRowValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowIndex',
        tsPropertyName: 'rowIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue',
        tsPropertyName: 'readOnlyRowValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowCounter',
        tsPropertyName: 'rowCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText',
        tsPropertyName: 'questionAbbreviatedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowID',
        tsPropertyName: 'rowID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingObjectName',
        tsPropertyName: 'mappingObjectName',
        type: 'string',
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
